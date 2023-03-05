require('express-async-errors')
const crypto = require('crypto');
const tokens = require('../utils/tokens')
const appError = require('../utils/appError');
const Email = require('../utils/email');
const User = require('../models/user.model');
const Profile = require('../models/profile.model')

// REQ TO DELETE ACCOUNT
exports.requestAccountDeletion = async (req, res, next) => {
    // 1. Get email from req object
    const email = req.user.email
    if(!email) throw new appError('Please log in to complete action', 401)
    // 2. Find user from db
    const user = await User.findOne({ email: email })

    if(!user) throw new appError('User does not exist!', 404)

    // 3. Create deactivation and other tokens
    const { token, deletionToken, deletionTokenExpires } = await tokens.createDeletionToken()

    // 4. Update user with tokens
    await User.findOneAndUpdate({ email: email }, {
        deletionToken: deletionToken,
        deletionTokenExpires: deletionTokenExpires
    }, { new: true })

    // 5. Define deletion url
    const deletionUrl = `${req.protocol}://${req.get('host')}/api/v1/account/delete/${token}`

    // 6. Define response message
    let message = 'A link has been sent to your mail. Please check your mail to continue.'
    message = process.env.NODE_ENV === 'production' ? message : `${message}${deletionUrl}`

    // 7. Send mail to user email
    await new Email(user, deletionUrl).sendDeletion()
        .then(() => {
            res.status(200).json({
                status: 'success',
                message: message
            })
        }).catch((err) => {
            res.status(500).json({
                error: err.message
            })
        })
} 


// DELETE A USER'S ACCOUNT 
exports.deleteAccount = async (req, res) => {
    // 1. Get and confirm token from req
    const { token } = req.params

    const confirmToken = crypto
        .createHash('sha256')
        .update(token)
        .digest('hex')

    // 2. Find user account to delete
    const user = await User.findOne({
        deletionToken: confirmToken,
        deletionTokenExpires: { $gt: Date.now() }
    })

    if(!user) throw new appError('Please log in to complete this action', 401)

    // 3. Update fields
    user.isDeleted = true;
    user.deletionToken = null;
    user.deletionTokenExpires = null;
    user.deletionDate = Date.now() + (30 * 24 * 60 * 60 * 1000) //30days
    await user.save()

    // 4. Activation link
    const activationUrl = `${req.protocol}://${req.get('host')}/api/v1/account/activate`;

    // 5. Send confirmation mail
    try{
        await new Email(user, activationUrl).sendDeletionConfirmation();

        res.status(200).json({
            status: 'success',
            message: `Your account has been deactivated, and will be permanently deleted after 30days of inactivity. Thanks`

        })
    }catch(err){
        res.status(500).json({
            message: `Your account has been successfully deactivated, but there was an error sending you a confirmation.Your account will be permanetly deleted in 30 days`
        })
    }
}