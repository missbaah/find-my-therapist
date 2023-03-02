require('dotenv').config()
require('express-async-errors')
const jwt = require('jsonwebtoken')
const appError = require('../utils/appError')
const logger = require('../utils/logger')
const bcrypt = require('bcrypt')
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

    res.status(statusCode).json({
        status: 'success',
        data: {
            user,
            token,
        }
    })
}

exports.signup = async (req,res) => {

    // GET USER INPUT FROM REQ.BODY
    const { firstName, lastName, email, password, passwordConfirm, licensingBoard, licenseNumber } = req.body
    // ENSURE ALL FIELDS ARE COMPLETED
    if(!(firstName ?? lastName ?? email ?? password ?? passwordConfirm ?? licensingBoard ?? licenseNumber)){
        throw new appError('All fields must be filled', 400)
    }
    
    // COMPARE PASSWORD and PASSWORD CONFIRM
    if(passwordConfirm !== password){
        return new appError('Passwords must match', 400)
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
        licensingBoard, //check if valid
        licenseNumber   //check if valid
    })
    
    // CREATE and SEND TOken
    createSendToken(user, 200, res)
}    

exports.login = async (req,res) => {
    // GET DETAILS FROM REQ. BODY
    const { email, password } = req.body
    
    // VALIDATE USER INPUT
    if(!(email && password)){
        throw new appError('Fields cannot be empty')
    }
    // CHECK IF DETAILS MATCH RECORDS IN DATABASE
    const user = await User.findOne({ email })
    
    if(!user){
        throw new appError('User not found! Please sign up')
    }
    
    //NOTIFY USERS WITH SOCIAL AUTH WHEN LOGGING IN
    if (user && !user.password)
    throw new appError("User already exists. Please login using your socials",401);

    // compare password
    if(user && (await bcrypt.compare(password, user.password))){
        createSendToken(user, 200, res)
    }
    
    res.status(400).json({
        status: 'fail',
        message: 'Incorrect login details. Try again'
    })
}

exports.authorize = async (req,res,next) => {
    // get token from authorization header
    const authHeader = req.headers.authorization;
    if(!authHeader){
        return res.status(403).json({
            status: 403,
            message: 'FORBIDDEN'
        })
    }

    const token = authHeader.split(' ')[1];

    // verify token
    const verifyToken = jwt.verify(token, process.env.JWT_SECRET);

    // check if user exists
    const currentUser = await User.findById(verifyToken.userId)
    // const currentUser = await User.findOne(verifyToken.user_id)
    if(!currentUser){
        return next(new appError('Session expired, Login again!'))
    }

    // add user to req object
    req.user = currentUser; 
    // console.log(currentUser)
    next()
}


// SOCIAL SIGNUP OR LOGIN
exports.checkOrCreateSocialUser = async (socialUser) => {
    // validate user input
    // if(!socialUser) throw new appError('User credentials are required',400)
    // // check if user already exists
    // const oldUser = await User.findOne({ googleId: socialUser.googleId })
    // // create new user if new
    // if(!oldUser){
    //     const user = await User.create({...socialUser});
    //     if(!user) throw new appError('Failed to create social user', 500)
    // }
    
    return res.status(200).json({message: 'wetin sup'});
};

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
        createSendToken(user, 200, res)
      }
      
    //   return res.status(200).json({ message: 'Registration successful', token: token });
    } catch (error) {
      return res.status(500).json({ message: `${error.message}` });
    }
}    
