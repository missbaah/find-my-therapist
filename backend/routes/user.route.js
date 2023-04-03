const router = require('express').Router()
const authController = require('../controllers/auth.controller')
require('../utils/passportOAuth')
const { socialAuth } = require('../controllers/socialAuth.controller')
const { validateInputMW, validateLoginInput } = require('../validators/user.validator')
const passport = require('passport')
const User = require('../models/user.model')

// AUTHENTICATION ROUTES
router.post('/signup', validateInputMW, authController.signup ) //
router.post('/login', validateLoginInput, authController.login )
router.patch('/forgot-password', authController.forgotPassword)
router.patch('/resetpassword/:token', authController.resetPassword)

// GOOGLE REGISTRATION
router.get('/google', passport.authenticate('google', { scope: ['profile', 'email'] }))

// CALLBACK
router.get('/google/callback', passport.authenticate('google', {session: false}), socialAuth)

// ROUTE TO REGISTER GOOGLE USERS
router.get('/register/google', (req, res) => {
  res.send(`<form action="/auth/register/google" method='post'>
      <label for="fname">Licensing Board:</label><br>
      <input type="text" name="licensingBoard"><br>
      <label for="lname">License Number:</label><br>
      <input type="text"  name="licenseNumber">
      <input type="submit"  name="submit">
    </form>`)
  } 
);

router.post('/register/google', authController.completeRegistration)


// LOGOUT - DESTROY SESSION
router.get('/logout', (req,res,next) => {
    // req.logout()
    return res.clearCookie('jwt').redirect('/');
})

router.get('/user', authController.getUser)

module.exports = router