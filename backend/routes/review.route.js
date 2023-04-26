const router = require('express').Router()
const reviewController = require('../controllers/review.controller')

router.post('/:mhpId', reviewController.draftReview)
router.patch('/:reviewId', reviewController.editReview)
router.patch('/publish/:reviewId', reviewController.publishReview)

module.exports = router