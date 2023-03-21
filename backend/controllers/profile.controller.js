require('express-async-errors')
const appError = require('../utils/appError')
const logger = require('../utils/logger')
const { uploadToCloudinary } = require('../utils/cloudinaryFunctions')
const Profile = require('../models/profile.model')
const User = require('../models/user.model')


// each user can create a profile just once and edit thereafter
exports.createProfile = async (req, res) => {
    const userId = req.user.id
    const body = req.body;
    const filePath = req.file?.path;
    
    const defaultProfileURL = 'https://st3.depositphotos.com/1767687/16607/v/450/depositphotos_166074422-stock-illustration-default-avatar-profile-icon-grey.jpg'

    // check if user has setup profile already
    const oldProfile = await Profile.findOne({ user: userId })
    if(oldProfile){
        return res.status(403).json({
            status: 'fail',
            message: 'Profile already created. '
        })
    }
    
    // FIND USER
    const user = await User.findById(userId)
    let uploadPic;
    if(filePath){
        uploadPic = await uploadToCloudinary(filePath)
    }
    
    // CREATE PROFILE OBJ
    const profile = await Profile.create({
        bio: req.body.bio,
        gender: req.body.gender,
        ...body,
        profilePic: uploadPic ?? defaultProfileURL,
        user: user
    })
    
    res.status(201).json({
        status: 'success',
        message: 'profile successfully created',
        data: profile 
    })
}

// UPDATE PROFILE
exports.updateProfile = async (req, res) => {
      
    const userId = req.user.id
    
    const profileId = req.params.profileId.trim()
   
    const profileToUpdate = await Profile.findById(profileId)
    if(!profileToUpdate) throw new appError('Profile not found', 404)


    const body = req.body
    
    const filePath = req.file?.path
    let uploadPic;
    
    // UPDATE PROFILE 
    if(profileToUpdate.user._id == userId){
        const update = await Profile.findOneAndUpdate({ _id: profileId },  {...body, profilePic: uploadPic }, {
                new: true,
                runValidators: true
        } )

        res.status(200).json({
            status: 'success',
            message: 'Profile updated successfully',
            data: update 
        })
    }else{
        return new appError('Unauthorized', 403)
    }
}


// GET PROFILE OF A PARTICULAR MHP
exports.getOwnerProfile = async (req, res) => {
    // GET ID OF MHP from REQ HEaders
    const userId = req.user.id
    
    // FIND MHP'S PROFILE WITH ID
    const profile = await Profile.findOne({ user: userId }).populate('user')

    res.json(profile)
}