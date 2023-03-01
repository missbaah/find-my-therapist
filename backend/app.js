const express = require('express')
const app = express()
const cookieParser = require('cookie-parser')

const appError = require('./utils/appError')
const logger = require('./utils/logger')
const morganMiddleWare = require('./utils/morgan')
const globalErrorHandler = require('./controllers/error.controller');

// routes import
const userRoute = require('./routes/user.route')
const profileRoute = require('./routes/profile.route')

// VIEWS
app.set('views', 'views')
app.set('view engine', 'ejs')
app.use(express.static('views'))

// MORGAN MIDDLEWARE
app.use(morganMiddleWare)

// PARSE REQ.BODY
app.use(express.json());
app.use(express.urlencoded({ extended: true }))

// COOKIE PARSER
app.use(cookieParser());

// ROUTES
app.use('/auth/', userRoute)
app.use('/api/v1/profile', profileRoute)

// home route
app.get('/', (req,res) => { 
    res.send("welcome to the findmytherapist app \n <a href='/auth/google' data-prompt='select_account'>Continue with Google</a>") 
})

app.get('/yo', (req,res) => {
    res.redirect('/auth/register/google')
})


// change req time format
app.use((req,res,next) => {
    req.requestTime = new Date().toISOString();
    next();
});

// handle unknown request errs
app.all('*', (req,res,next) =>{
    return new appError(`${req.originalUrl} not found on server`, 404)
})

// register global error handler
app.use(globalErrorHandler)


module.exports = app 