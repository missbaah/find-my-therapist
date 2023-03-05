// Functions to generate tokens for use in the application
const crypto = require('crypto')

// FUNCTION TO GENERATE PASSWORD RESET TOKEN
exports.createPasswordResetToken = async () => {
    const resetToken = crypto.randomBytes(32).toString('hex');
    const passwordToken = crypto
        .createHash('sha256')
        .update(resetToken)
        .digest('hex')

    const passwordResetExpires = Date.now() + 10 * 60 * 1000; // 10min
    return { resetToken, passwordToken, passwordResetExpires };
}

exports.createDeletionToken = async () => {
    const token = crypto.randomBytes(32).toString('hex');
    const deletionToken = crypto
        .createHash('sha256')
        .update(token)
        .digest('hex');
        const deletionTokenExpires = Date.now() + 10 * 60 * 1000;
    return { token, deletionToken, deletionTokenExpires }
}