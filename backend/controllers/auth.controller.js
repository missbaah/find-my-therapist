require('dotenv').config()
require('express-async-errors')
const jwt = require('jsonwebtoken')
const appError = require('../utils/appError')
const logger = require('../utils/logger')
const bcrypt = require('bcrypt')
const crypto = require('crypto')
const { promisify } = require('util')
const Email = require('../utils/email')
const tokens = require('../utils/tokens')
const User = require('../models/user.model')


const createSendToken = (user,statusCode, res) => {
    // create token
    const token = jwt.sign(
        {userId: user._id},
        process.env.JWT_SECRET,
        { expiresIn: process.env.JWT_EXPIRES}
    )

    const cookieOptions = {
        expires: new Date(Date.now() + 1 * 60 * 60 *1000 ),
        httpOnly: true,
    };

    if(process.env.NODE_ENV === 'production') cookieOptions.secure = true;

    // SEND TOKEN TO CLIENT
    res.cookie('jwt', token, cookieOptions)

    return res.status(statusCode).json({
        status: 'success',
        data: {
            user,
            token,
        }
    })
}

exports.signup = async (req,res) => {

    // GET USER INPUT FROM REQ.BODY
    const { firstName, lastName, email, password, passwordConfirm, telephoneNumber, workNumber, licensingBoard, licenseNumber, termsAgreement } = req.body
    // ENSURE ALL FIELDS ARE COMPLETED
    if(!(firstName && lastName && email && password && passwordConfirm && licensingBoard && licenseNumber && telephoneNumber && workNumber)){
        return res.status(400).json({message: 'All fields must be filled'})
    }
    
    // COMPARE PASSWORD and PASSWORD CONFIRM
    if(passwordConfirm !== password){
        return res.status(400).json({message: 'Passwords must match'})
    }

    if(!termsAgreement){
        return res.status(400).json({
            message: `Please agree to the terms of service`
        })
    }

    // CHECK VALIDITY OF LICENSING DETAILS
    
    // CHECK IF USER ALREADY EXISTS
    const oldUser = await User.findOne({ email })
    if(oldUser){
        return res.status(409).json({
            status: 'failed',
            message: 'User already exists. Please login to continue'
        });
    };
    // IF PASSWORDS MATCH
    const user = await User.create({
        firstName, 
        lastName, 
        email, 
        password,
        telephoneNumber, 
        workNumber,
        licensingBoard, 
        licenseNumber   
    })

    try{
        // add later setting up email
        // SEND WELCOME MAIL
        // const url = `${req.protocol}://${req.get('host')}/api/v1/profile`
        // await new Email(user, url).sendWelcome()
        // CREATE and SEND TOken
        createSendToken(user, 200, res);
    }catch(err){
        res.status(500).json({
            status: 'failed',
            // message: `Account created successfully but we encountered an error sending email`,
            error: `${err.message}`
        });
    }
    
}    

exports.login = async (req,res) => {
    // GET DETAILS FROM REQ. BODY
    const { email, password } = req.body
    
    // VALIDATE USER INPUT
    if(!(email && password)){
        return res.status(400).json({message: 'Fields cannot be empty'})
    }
    // CHECK IF DETAILS MATCH RECORDS IN DATABASE
    const user = await User.findOne({ email })
    
    if(!user){
        return res.status(400).json({message: 'User not found! Please sign up'})
    }
    
    //NOTIFY USERS WITH SOCIAL AUTH WHEN LOGGING IN
    if (user && !user.password)
        return res.status(409).json({ message: "User already exists. Please login using your socials"});

    // compare password
    if(user && (await bcrypt.compare(password, user.password))){
       return createSendToken(user, 200, res)
    }
    
    res.status(400).json({
        status: 'fail',
        message: 'Incorrect login details. Try again'
    })
}

exports.authorize = async (req, res, next) => {
    let token;
    if (process.env.NODE_ENV === "development") {
      const authHeader = req.headers.authorization;
      if (!authHeader)
        return res.status(403).json({message: "You are not logged in, Please Login Again"});
  
      //Save token from authHeader if available
      token = authHeader.split(" ")[1];
    } else if (process.env.NODE_ENV === "production") {
      const cookieValue = req.cookies.jwt;
      if (!cookieValue)
        return res.status(400).json({message: "You are not logged in, Please Login Again"});
  
      //SAVE TOKEN FROM COOKIE
      token = req.cookies.jwt;
    }
  
    // verify token
    const verifyToken = await promisify(jwt.verify)(token, process.env.JWT_SECRET);
  
    const currentUser = await User.findById(verifyToken.userId)
  
    if (!currentUser){
        return res.status(400).json({message: "Account Not Found, Please Login again!"});
    }
    //Add user to req object
    req.user = currentUser;
    next();
}  

exports.completeRegistration = async (req, res) => {
    
    const googleDetails = req.session.googleDetails
    try {
      const { licensingBoard, licenseNumber } = req.body;
      const user = new User({
        googleId: googleDetails.googleId,
        firstName: googleDetails.firstName,
        lastName: googleDetails.lastName,
        email: googleDetails.email,
        licensingBoard,
        licenseNumber
      });
      await user.save();

      if(user){
        // createSendToken(user, 200, res)
        try{
            // SEND WELCOME MAIL
            // const url = `${req.protocol}://${req.get('host')}/api/v1/profile`
            // await new Email(user, url).sendWelcome()
            // CREATE and SEND TOken
            createSendToken(user, 200, res);
        }catch(err){
            res.status(500).json({
                status: 'failed',
                // message: `Account created successfully but we encountered an error sending email`,
                error: `${err.message}`
            });
        }
      }
      
    } catch (error) {
      return res.status(500).json({ message: `${error.message}` });
    }
}    


exports.forgotPassword = async (req, res) => {
    // 1. GET USER FROM EMAIL
    const email = req.body.email;
    const user = await User.findOne({email})
    if(!user) return res.status(400).json('No user with that email', 404)
 
    // 2. GENERATE RESET TOKEN & OTHER RETURNED VALUES
    const { resetToken, passwordToken, passwordResetExpires } = await tokens.createPasswordResetToken()

    // 3. SAVE TO DATABASE                        
    const updatedUser = await User.findOneAndUpdate({ email: email }, {
        passwordToken: passwordToken,
        passwordResetExpires: passwordResetExpires,
    }, { new: true});

    // 4. SEND TO CLIENT
    const resetUrl = `${req.protocol}://${req.get('host')}/auth/resetpassword/${resetToken}`

    try{
        // 5. SEND EMAIL TO CLIENT
        await new Email(user, resetUrl).sendPasswordReset();

        // SEND JSON RESPONSE
        res.status(200).json({
            status: 'success',
            message: `Token sent to ${email}`,
        });
    }catch(err){
        return res.status(400).json({message: 'Error sending reset link, try again'})
    }
}


exports.resetPassword = async(req, res) => {
    // 1. Create a hashed token from req params
    const hashedToken = crypto
        .createHash('sha256')
        .update(req.params.token)
        .digest('hex');
    const user = await User.findOne({
        passwordToken : hashedToken,
        passwordResetExpires: { $gt: Date.now() }
    });
    // 2. Check if token exists or there is such a user
    if(!user){
        return res.status(400).json({message: 'Token Expired or Invalid Token, Request for a new token'});
    }
    // 3. If user and token exists, update the new password
    user.password = req.body.password;
    user.passwordToken = null
    user.passwordResetExpires = null;
    await user.save();

    try{
        const loginUrl = `${req.protocol}://${req.get('host')}/api/auth/login`
        // 4. Send success email to client
        await new Email(user, loginUrl).sendVerifiedPR();
        // 5. Log user in and send jwt
        createSendToken(user, 200, res)
    }catch(err){
        return res.status(400).json({message: 'Password has been reset, but we are having an issue sending a mail. Please proceed to login'});
    };
};

// exports.getUser = async (req, res) => {
//     const { name } = req.query;
    
//     const splitName = name.split(' ')
//     const firstName = splitName[0];
//     const lastName = splitName[1];

//     const user = await User.findOne({firstName: firstName, lastName: lastName})
    
//     if(user){
//        res.json(user) 
//     }else{
//         res.status(404).json({message: 'user not found'})
//     }

// }