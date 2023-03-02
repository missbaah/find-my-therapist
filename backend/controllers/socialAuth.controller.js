require('express-async-errors')
require('dotenv').config()


exports.socialAuth = async (req,res) => {
    const {
        user:{user,token}
    } = req;
    const oldUser = req.user.oldUser
    const googleDetails = req.user.googleDetails
    if(oldUser){
        const cookieOptions = {
            expires: new Date(Date.now() + 1 * 60 * 60 * 1000),
            httpOnly: true,
        };
        if (process.env.NODE_ENV === "production") cookieOptions.secure = true;
    
        // Send token to client
        res.cookie("jwt", token, cookieOptions);
    
        res.status(201).json({
            status: "Success",
            data: {
                oldUser,
                token,
            },
        });
    }
    if(googleDetails){
        req.session.googleDetails = googleDetails
        res.redirect('/auth/register/google')
    }
    
}