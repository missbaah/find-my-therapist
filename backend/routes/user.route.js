const router = require('express').Router()
const authController = require('../controllers/auth.controller')
require('../utils/passportOAuth')
const { socialAuth } = require('../controllers/socialAuth.controller')
const { validateInputMW, validateLoginInput } = require('../validators/user.validator')
const passport = require('passport')
const User = require('../models/user.model')

// AUTHENTICATION ROUTES
router.post('/signup', validateInputMW,  authController.signup ) //
router.post('/login', validateLoginInput, authController.login )

// GOOGLE REGISTRATION
router.get('/google', passport.authenticate('google', { scope: ['profile', 'email'] }))

// CALLBACK
// router.get('/google/callback', passport.authenticate('google', {
//   session: false,
// }), function (req, res){
//   res.redirect('/auth/register/google')
// }, authController.completeRegistration)

router.get('/google/callback', passport.authenticate('google', {
  session: false,
}), function(req,res){
  // res.json(`${req.user}`) //`<html>Hello User</html>`
  res.json(req.user.googleDetails)
})





// router.get('/register/google', (req,res) => { 
//     res.send(`<form action="/auth/register/google" method='post'>
//     <label for="fname">Licensing Board:</label><br>
//     <input type="text" name="licensingBoard"><br>
//     <label for="lname">License Number:</label><br>
//     <input type="text"  name="licenseNumber">
//     <input type="submit"  name="submit">
//   </form>`) 
// })

router.get('/register/google', (req, res) => {
  // check if user is a new user
  if (req.user && req.user.isNewUser) {
    // if user is a new user, render the registration page
    // res.render('registration', { user: req.user });
    res.send(`<form action="/auth/register/google" method='post'>
        <label for="fname">Licensing Board:</label><br>
        <input type="text" name="licensingBoard"><br>
        <label for="lname">License Number:</label><br>
        <input type="text"  name="licenseNumber">
        <input type="submit"  name="submit">
      </form>`)
  } else {
    // if user is not a new user, redirect to home page
    res.redirect('/');
  }
});

// router.post('/register/google', async (req, res) => {
//   try {
//     // check if user is a new user
//     if (req.user && req.user.isNewUser) {
//       // if user is a new user, update user details with licensingBoard and licenseNumber
//       const { licensingBoard, licenseNumber } = req.body;
//       req.user.licensingBoard = licensingBoard;
//       req.user.licenseNumber = licenseNumber;
//       await req.user.save();
//     }
//     // redirect to home page after registration is complete
//     res.redirect('/');
//   } catch (err) {
//     console.log(err);
//     res.status(500).send('Server Error');
//   }
// });


// router.post('/register/google', async (req, res) => {
//     try {
//       console.log('newUser', req.user)
//     //   const { licensingBoard, licenseNumber } = req.body;
//     //   const user = new User({
//     //     googleId: req.user.googleId,
//     //     firstName: req.user.firstName,
//     //     lastName: req.user.lastName,
//     //     email: req.user.email,
//     //     // googleId: req.googleId,
//     //     // firstName: req.firstName,
//     //     // lastName: req.lastName,
//     //     // email: req.email,
//     //     licensingBoard,
//     //     licenseNumber
//     //   });
//     //   await user.save();
//     //   return res.status(200).json({ message: 'Registration successful' });
//     } catch (error) {
//       return res.status(500).json({ message: `${error.statusCode} : ${error.message}` });
//     }
// });

// router.post('/register/google', async (req, res, next) => {
//   const { licensingBoard, licenseNumber } = req.body;
//   const User = req.user;
//   console.log(`newUser : ${User}`)
//   if (User ) { //&& newUser.isNewUser
//     try {
//       // update user object with additional details
//       User.licensingBoard = licensingBoard;
//       User.licenseNumber = licenseNumber;

//       // save user to database
//       const savedUser = await newUser.save();

//       // create token and send response to client
//       const token = jwt.sign(
//         { userId: savedUser._id },
//         process.env.JWT_SECRET,
//         { expiresIn: process.env.JWT_EXPIRES }
//       );
//       res.status(201).json({ success: true, user: savedUser, token });
//     } catch (err) {
//       next(err);
//     }
//   } else {
//     const error = new Error('User object not found');
//     error.statusCode = 404;
//     next(error);
//   }
// });



// GOOGLE OAUTH ROUTE
// router.get('/google', passport.authenticate('google' , { scope: ['profile', 'email'] }) )


//OAUTH CALLBACKS
// router.get('/google/callback', passport.authenticate('google',{session:false}), authController.checkOrCreateOAuthUser)//socialAuth
// router.get('/google/callback', passport.authenticate('google', {
//     // successRedirect: '/dashboard',
//     session: false,
//     // failureRedirect: '/auth/register/google',
//     // failureFlash: 'Google authentication failed. Please try again or register manually.'
// }),
//  function(req, res) {
//     // Redirect the user to the registration form to complete their registration
//     res.redirect('/auth/register/google');
// }, socialAuth); //
// router.get('/google/callback', passport.authenticate('google', {
//   session: false,

// }), function (req, res){
//   res.redirect('/auth/register/google')
// }, authController.completeRegistration)
  


// LOGOUT - DESTROY SESSION
router.get('/logout', (req,res,next) => {
    // req.logout()
    return res.clearCookie('jwt').redirect('/');
})


module.exports = router