const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const Schema = mongoose.Schema
const ObjectId = mongoose.Schema.Types.ObjectId

const userSchema = new Schema({
    // id: ObjectId,
    googleId: { type: String },
    firstName: { type: String, required: true},
    lastName: { type: String, required: true},
    email: { type: String, required: true},
    password: { type: String,  minlength: 8}, //required: true,
    licensingBoard: { type: String, required: true },
    licenseNumber: { type: String, required: true, unique: true },
    passwordToken: { type: String },
    passwordResetExpires: { type: Date },
    // profile: {
    //     type: ObjectId,
    //     ref: 'Profile'
    // }
    // passwordConfirm: { type: String, required: true},
});


// Before saving to database, hash password
userSchema.pre('save',
    async function (next) {
        if(!this.isModified('password'))  next();
        this.password = await bcrypt.hash(this.password, 12)
        this.passwordConfirm = undefined
        next()
    }
)

// To ensure user logging in has the correct credentials
userSchema.methods.isValidPassword = async (password) => {
    const user = this;
    const compare = await bcrypt.compare(password, user.password);

    return compare;
}

userSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString()
        delete returnedObject._id
        delete returnedObject.__v
        delete returnedObject.password
        // delete returnedObject.token
    }
})



const userModel = mongoose.model('User', userSchema)

module.exports = userModel
// TO DO
// compare passwords on account creation
// create jwt token