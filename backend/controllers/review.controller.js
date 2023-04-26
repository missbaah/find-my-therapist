require('express-async-errors')
const appError = require('../utils/appError')
const logger = require('../utils/logger')
const Review = require('../models/review.model')
const User = require('../models/user.model')


/**
 * TO DO
 * - public user draft a review - done
 * - edit review - done
 * - and published review
 * - publish draft(after checks =>(hey so so dropped a review about you. Worked with them?))
 * - get a review
 * - get all reviews on an mhp
 */

exports.draftReview = async (req, res) => {
    const { mhpId } = req.params
    const { reviewer, review } = req.body

    const therapist = await User.findById(mhpId)

    if(!therapist){
        return res.status(400).json({
            status: 'fail',
            message: 'MHP not found. Make sure you have the right id'
        })
    }

    if(!(review && reviewer)){
        return res.status(400).json({
            status: 'error',
            message: 'Please enter your name and your review'
        })
    }

    const newReview = await Review.create({
        reviewer, review, 
        therapist: therapist.id
    }) 

    
    return res.status(201).json({
        status: 'success',
        message: 'Review added successfully',
        data: newReview
    })
}


/**@editReview */
exports.editReview = async (req, res) => {
    const { reviewId } = req.params
    const { body } = req.body

    const reviewToUpdate = await Review.findById(reviewId)
    
    if(!reviewToUpdate){
        return res.status(404).json({
            status: 'fail',
            message: 'Review not found'
        })
    }

    if(reviewToUpdate.state === 'published'){
        const update = await Review.findOneAndUpdate({ _id: reviewId },  { review: body }, {
            new: true,
            runValidators: true
        })

        return res.status(200).json({
            status: 'success',
            message: 'Review update successful',
            data: update
        })
    }else{
        return res.status(202).json({
            status: 'in progress',
            message: 'Your review is awaiting acceptance. You can edit when it is published'
        })
    }
}

/**@publishReview */

exports.publishReview = async (req, res) => {
    const { reviewId } = req.params

    const reviewToPublish = await Review.findById(reviewId)
    
    if(!reviewToPublish){
        return res.status(404).json({
            status: 'fail',
            message: 'Review not found'
        })
    }

    if(reviewToPublish.state === 'published'){
        return res.status(409).json({
            status: 'fail',
            message: 'This review is already published'
        })
    }else{
        const status = reviewToPublish.state = 'published'

        reviewToPublish.save()
        
        return res.status(200).json({
            status: 'success',
            message: 'Review successfully published',
            data: reviewToPublish
        })
    }

}


/**@getReviews of an mhp
 * 
*/

exports.getReviews = async (req, res) => {
    const { page = 1, per_page = 10 } = query;
    
}

