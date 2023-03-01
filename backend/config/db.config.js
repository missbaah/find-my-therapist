const logger = require('../utils/logger')
const appError = require('../utils/appError')
require('dotenv').config();

const mongoose = require('mongoose');

const LOCAL_MONGODB_URI=process.env.LOCAL_MONGODB_URI
const MONGODB_ATLAS_URI=process.env.MONGODB_ATLAS_URI

// CONNECT TO DATABASE
function connectToDB(){
    mongoose.connect(LOCAL_MONGODB_URI, {
        useNewUrlParser: true,
        // useCreateIndex: true,
        useUnifiedTopology: true
        });  //MONGODB_ATLAS_URI ?? 
    //  IF CONNECTION IS SUCCESSFUL
    mongoose.connection.on('connected', () => {
        logger.info('Connected to DB successfully')
    })
    // IF CONNECION IS UNSUCCESSFUL
    mongoose.connection.on('error', (err) => {
        logger.info(err.message)
        throw new appError('Error connecting to the database', 500)        
    })
}

module.exports = { connectToDB }
