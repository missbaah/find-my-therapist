const app  = require('./app')
require('dotenv').config()
const { connectToMongoDB } = require('./config/dbConfig')


// CONFIGURE UNCAUGHT EXCEPTIONS
process.on('uncaughtException', (err) => {
    console.log('UNCAUGHT EXCEPTION! 🔥 Shutting Down...')
    console.log(err.name, err.message)
    process.exit(1);
})

// START SERVER
const PORT = process.env.PORT || 3300

// CONNECT TO DB
connectToMongoDB()

const server = app.listen(PORT, ()=>{
    console.log(`Server started on port: ${PORT}`)
})

// CONFIGURE UNCAUGHT REJECTIONS
process.on('unhandledRejection', err => {
    console.log('UNHANDLED REJECTION! 🔥 Shutting Down...')
    console.log(err.name, err.message)
    server.close(() =>{
        process.exit(1)
    });
});

module.exports = server