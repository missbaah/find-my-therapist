const router = require('express').Router()
const profileController = require('../controllers/profile.controller')
const { authorize } = require('../controllers/auth.controller')
const upload = require('../utils/fileUpload')


router.post('/', authorize, upload.single('profile_pic'), profileController.createProfile)
router.patch('/:profileId', authorize, upload.single('profile_pic'), profileController.updateProfile)
router.get('/', authorize, profileController.getOwnerProfile)
router.get('/profiles', profileController.getMHP)



module.exports = router