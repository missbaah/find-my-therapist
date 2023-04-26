const mongoose = require('mongoose')

const Schema = mongoose.Schema

const reviewSchema = new Schema({
    reviewer: {
        type: String,
        required: true
    },
    review: {
        type: String,
        required: true
    },
    state: {
        type: String,
        enum: ['draft', 'published'],
        default: 'draft'
    },
    therapist: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
},
    { timestamps: true },
    // { 
    //     toJSON: { virtuals: true },
    //     toObject: { virtuals: true }
    // }
)

reviewSchema.set('toJSON', {
    virtuals: true,
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString()
        delete returnedObject._id
        delete returnedObject.__v
    }
})



const reviewModel = mongoose.model('Review', reviewSchema)

module.exports = reviewModel