require('express-async-errors')
require('dotenv').config()
const logger = require('../utils/logger')
const appError = require('../utils/appError')
const passport = require('passport')
const jwt = require('jsonwebtoken')

const User = require('../models/user.model')


const GoogleStrategy = require('passport-google-oauth2').Strategy

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: "http://localhost:3334/auth/google/callback",
      passReqToCallback: true,
    },
    async (req, accessToken, refreshToken, profile, done) => {

      const googleDetails = {
        googleId: profile.id,
        firstName: profile.given_name,
        lastName: profile.family_name,
        email: profile.email,
      };

      // Check if user exist or Create user

      if (!googleDetails) {
        const error = new appError("User credentials are required!", 401);
        done(error);
      }
      try {
        //check if user already exists
        const oldUser = await User.findOne({
           googleId: googleDetails.googleId ,
        });

    // IF USER EXISTS SEND USER WITH TOKEN
      if (oldUser) {
        const token = jwt.sign(
          { userId: oldUser.id },
          process.env.JWT_SECRET,
          { expiresIn: process.env.JWT_EXPIRES }
        );
        return done(null, { oldUser, token });
      }else{
        return done(null, { googleDetails });
      }
      } catch (error) {
        done(error);
      }

    }
  )
);