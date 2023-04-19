const mongoose = require('mongoose')


const Schema = mongoose.Schema
const objectId = mongoose.Schema.Types.ObjectId

const profileSchema = new Schema({
    bio: { type: String },
    profilePic: { type: String },
    gender: { type: String, },
    workAddress: { type: String },
    experience: { type: Number },
    specialties: { type: String },
    interestGroup:  { type: String },
    officeHoursStart: { Date },
    officeHoursClose: { Date },
    region: { type: String, required: true },
    town: { type: String, required: true },
    website: { type: String },
    facebook: { type: String },
    instagram: { type: String },
    tiktok: { type: String },
    linkedin: { type: String },
    twitter: { type: String },
    user: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'User',
    },
},
{timestamps: true},
{
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
})


profileSchema.pre(/^find/, function (next){
    this.populate({
        path: 'user',
        select: '-__v -password -passwordToken -passwordResetExpires',
    })
    next()
})



const profileModel = mongoose.model('Profile', profileSchema)

module.exports = profileModel