require('express-async-errors')
require('dotenv').config()
const logger = require('../utils/logger')
const appError = require('../utils/appError')
const passport = require('passport')
const jwt = require('jsonwebtoken')

const User = require('../models/user.model')


const GoogleStrategy = require('passport-google-oauth2').Strategy

// passport.use(new GoogleStrategy({
//     clientID: process.env.GOOGLE_CLIENT_ID,
//     clientSecret: process.env.GOOGLE_CLIENT_SECRET,
//     callbackURL: 'http://localhost:3334/auth/google/callback',
//     passReqToCallback: true,
//     prompt: 'select_account', // set prompt to 'select_account'
//     // accessType: 'offline' // add accessType option
//     },
//     async (req, accessToken, refreshToken, profile, done) => {
//         // get user details
//         const googleDetails = {
//             googleId: profile.id,
//             firstName: profile.given_name,
//             lastName: profile.family_name,
//             email: profile.emaill,
//             icensingBoard: req.body.licensingBoard, // add licensingBoard from request body
//             licenseNumber: req.body.licenseNumber //
//         }
        
//         // check if user exists or create user
//         if(!googleDetails){
//             const error = new appError('User credentials are required', 400)
//             done(error)
//         }
//         try{
//             // check for existing user
//             const oldUser = await User.findOne({ googleId: googleDetails.googleId })
//             // if user exists send user with token
//             if(oldUser){
//                 const token = jwt.sign(
//                     {userId: oldUser.id},
//                     process.env.JWT_SECRET,
//                     { expiresIn: process.env.JWT_EXPIRES}
//                 )
//                 return done(null, { oldUser, token })
//             }
//             // create new user if new
//             // const user = await User.create({ ...googleDetails })
//             const user = new User({
//                 googleDetails,
//             })
//             // await user.save()
                        
//             const token = jwt.sign(
//                 {userId: user.id},
//                 process.env.JWT_SECRET,
//                 { expiresIn: process.env.JWT_EXPIRES}
//             )
            
//             // send user and token
//             return done(null, {user, token })
//         }catch (err){
//             done(err)
//         }
//     }
// ))



// passport.use(new GoogleStrategy({
//     clientID: process.env.GOOGLE_CLIENT_ID,
//     clientSecret: process.env.GOOGLE_CLIENT_SECRET,
//     callbackURL: 'http://localhost:3334/auth/google/callback',
//     passReqToCallback: true,
//     prompt: 'select_account' // set prompt to 'select_account'
//     },
//     async (req, accessToken, refreshToken, profile, done) => {
//         const googleDetails = {
//             googleId: profile.id,
//             firstName: profile.given_name,
//             lastName: profile.family_name,
//             email: profile.email
//           }
          
//           // check if user exists
//           try {
//             let user = await User.findOne({ googleId: profile.id });
//             if (user) {
//               // if user exists send user with token
//               const token = jwt.sign(
//                 { userId: user.id },
//                 process.env.JWT_SECRET,
//                 { expiresIn: process.env.JWT_EXPIRES }
//               );
//               return done(null, { user, token });
//             } else {
//               // if user does not exist, redirect to registration page
//               const newUser = new User({
//                 googleDetails,
//                 isNewUser: true // add flag to indicate that user is a new user
//               });
//               req.user = newUser; // pass user to request object
//               console.log(newUser)
//               return done(null, { newUser }); // return newUser object to client
//             }
//           } catch (err) {
//             done(err);
//           }
          
//     }
// ));

// const passport = require('passport');
// const GoogleStrategy = require('passport-google-oauth20').Strategy;

// passport.use(new GoogleStrategy({
//     clientID: process.env.GOOGLE_CLIENT_ID,
//     clientSecret: process.env.GOOGLE_CLIENT_SECRET,
//     callbackURL: "http://localhost:3334/auth/google/callback",
//     passReqToCallback: true
//   },
//   function(accessToken, refreshToken, profile, done) {
//     // Here, we can extract the necessary information from the Google profile object and create a new user in our application's database.
//     console.log(profile)
//     if (!profile) {
//       return done(new appError("No profile found", 404));
//     }
//     // get user details
//     const googleDetails = {
//           googleId: profile.id,
//           firstName: profile.given_name,
//           lastName: profile.family_name,
//           email: profile.email,
//           // licensingBoard: req.body.licensingBoard, // add licensingBoard from request body
//           // licenseNumber: req.body.licenseNumber //
//     }
//     req.session.googleDetails = googleDetails
//     console.log(req.session.googleDetails)
//     return done(null, googleDetails)
//   }
// ));
// passport.use(new GoogleStrategy({
//   clientID: process.env.GOOGLE_CLIENT_ID,
//   clientSecret: process.env.GOOGLE_CLIENT_SECRET,
//   callbackURL: "http://localhost:3334/auth/google/callback"
// },
// function(accessToken, refreshToken, profile, done) {
//   // User.findOrCreate({ googleId: profile.id }, function (err, user) {
//   //   return cb(err, user);
//   // });
//   const googleDetails = {
//       googleId: profile.id,
//       firstName: profile.given_name,
//       lastName: profile.family_name,
//       email: profile.email,
//   }
//   return done(null, googleDetails )
// }
// ));

// passport.use(new GoogleStrategy({
//   clientID: process.env.GOOGLE_CLIENT_ID,
//   clientSecret: process.env.GOOGLE_CLIENT_SECRET,
//   callbackURL: "http://localhost:3334/auth/google/callback",
//   passReqToCallback: true // pass the req object to the callback function
// }, function(req, accessToken, refreshToken, profile, done) {
//   // Here, you can access the req object, which contains the session and other request properties
//   console.log(profile)
//   if (!profile) {
//     return done(new appError("No profile found", 404));
//   }
//   // get user details
//   const googleDetails = {
//     googleId: profile.id,
//     firstName: profile.given_name,
//     lastName: profile.family_name,
//     email: profile.email,
//     // licensingBoard: req.body.licensingBoard, // add licensingBoard from request body
//     // licenseNumber: req.body.licenseNumber //
//   };
//   console.log(req.login)
//   // req.googleDetails = googleDetails;
//   // console.log(req.googleDetails);
//   return done(null, googleDetails);
// }));

passport.use(new GoogleStrategy({
  clientID: process.env.GOOGLE_CLIENT_ID,
  clientSecret: process.env.GOOGLE_CLIENT_SECRET,
  callbackURL: "http://localhost:3334/auth/google/callback",
  passReqToCallback: true
},
function(req, accessToken, refreshToken, profile, done) {
  // Here, we can extract the necessary information from the Google profile object and create a new user in our application's database.
  
  if (!profile) {
    return done(new appError("No profile found", 404));
  }
  // get user details
  const googleDetails = {
    googleId: profile.id,
    firstName: profile.given_name,
    lastName: profile.family_name,
    email: profile.email,
    // licensingBoard: req.body.licensingBoard, // add licensingBoard from request body
    // licenseNumber: req.body.licenseNumber //
  }
  // req.session.googleDetails = googleDetails
  // console.log(req.session.googleDetails)

  function returnUser() {
    User.findOne({ googleId: googleDetails.googleId })
      .then(user => {
        if (user) {
          const token = jwt.sign(
            { userId: user.id },
            process.env.JWT_SECRET,
            { expiresIn: process.env.JWT_EXPIRES }
          );
          return done(null, { user, token });
        } else {
          const newUser = new User({
            googleDetails,
            isNewUser: true
          });
          req.user = newUser;
          return done(null, { newUser });
        }
      })
      .catch(err => {
        console.log(err);
        done(err);
      });
  }

  returnUser();
}));
