const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const Schema = mongoose.Schema

const userSchema = new Schema({
    googleId: { type: String },
    firstName: { type: String, required: true},
    lastName: { type: String, required: true},
    email: { type: String, required: true},
    password: { type: String,  minlength: 8},
    licensingBoard: { type: String, required: true },
    licenseNumber: { type: String, required: true, unique: true },
    passwordToken: { type: String },
    passwordResetExpires: { type: Date },
    isDeleted: { type: Boolean, defaultValue: false},
    deletionToken : { type: String },
    deletionTokenExpires: { type: Date },
    deletionDate: { type: Date },
});


userSchema.virtual('name').get(function(){
    return `${this.firstName} ${this.lastName}`
})

// Before saving to database, hash password
userSchema.pre('save',
    async function (next) {
        if(!this.isModified('password'))  next();
        this.password = await bcrypt.hash(this.password, 12)
        this.passwordConfirm = undefined
        next()
    }
)

// userSchema.pre(/^find/, function (next){
//     this.populate({
//         path: 'profile',
//     })
//     next()
// })

// To ensure user logging in has the correct credentials
userSchema.methods.isValidPassword = async (password) => {
    const user = this;
    const compare = await bcrypt.compare(password, user.password);

    return compare;
}

userSchema.set('toJSON', {
    virtuals: true,
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString()
        delete returnedObject._id
        delete returnedObject.__v
        delete returnedObject.password
    }
})



const userModel = mongoose.model('User', userSchema)

module.exports = userModel
