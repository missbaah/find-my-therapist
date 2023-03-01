const mongoose = require('mongoose')


const Schema = mongoose.Schema
const objectId = mongoose.Schema.Types.ObjectId

const profileSchema = new Schema({
    // id: { type: objectId } ,
    bio: { type: String },
    profilePic: { type: String },
    gender: { type: String, enum: ['male', 'female'] },
    workAddress: { type: String },
    experience: { type: Number },
    specialties: [ String ],
    interestGroup: [ {type: String} ],
    officeHoursStart: { Date },
    officeHoursClose: { Date },
    region: { type: String },
    town: { type: String },
    website: { type: String },
    // socials: {
    //     facebook: { type: String },
    //     instagram: { type: String },
    //     tiktok: { type: String },
    //     linkedin: { type: String },
    //     snapchat: { type: String },
    // },
    facebook: { type: String },
    instagram: { type: String },
    tiktok: { type: String },
    linkedin: { type: String },
    snapchat: { type: String },
    user: { 
        type: mongoose.Schema.Types.ObjectId, //objectId,
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