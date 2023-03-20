const express = require('express')
const app = express()
const cookieParser = require('cookie-parser')
const cors = require('cors')

const appError = require('./utils/appError')
const logger = require('./utils/logger')
const morganMiddleWare = require('./utils/morgan')
const globalErrorHandler = require('./controllers/error.controller');

const userRoute = require('./routes/user.route')
const profileRoute = require('./routes/profile.route')
const accountRoute = require('./routes/account.route')

app.set('views', 'views')
app.set('view engine', 'ejs')
app.use(express.static('views'))

app.use(morganMiddleWare)

app.use(express.json());
app.use(express.urlencoded({ extended: true }))

app.use(cors());

app.use(cookieParser());

// ROUTES
app.use('/auth/', userRoute)
app.use('/api/v1/profile', profileRoute)
app.use('/api/v1/account', accountRoute)

// home route
app.get('/', (req,res) => { 
    res.send("welcome to the findmytherapist app \n <a href='/auth/google' data-prompt='select_account'>Continue with Google</a>") 
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