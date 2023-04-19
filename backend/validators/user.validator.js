const Joi = require('joi');

const userValidator = Joi.object({
    email: Joi.string()
            .email()
            .required(),
    firstName: Joi.string()
                .min(2)
                .max(40)
                .required(),
    lastName: Joi.string()
                .min(2)
                .max(40)
                .required(),
    password: Joi.string()
                .pattern(new RegExp("^[a-zA-Z0-9]{3,30}$"))
                .min(8)
                .required(),
    passwordConfirm: Joi.ref('password'),
    licensingBoard: Joi.string()
                .required(),
    licenseNumber: Joi.string()
                .required(),
    termsAgreement: Joi.boolean().valid(true).required(),
    passwordResetToken: [Joi.string(), Joi.number()],
    passwordResetExpires: Joi.date(),
    telephoneNumber: Joi.string().pattern(/^((\+|00)233|0)?\d{9}$/).required(),
    workNumber: Joi.string().pattern(/^((\+|00)233|0)?\d{9}$/).required(),
    // telephoneNumber: Joi.string().pattern((/^\+\d{1,3}\d{3,}$/)).required,
    // workNumber: Joi.string().pattern((/^\+\d{1,3}\d{3,}$/)).required,
})

const loginValidator = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().pattern(new RegExp("^[a-zA-Z0-9]{3,30}$")).required(),                
})

exports.validateInputMW = async (req,res,next) => {
    const userPayload = req.body;
    try{
        await userValidator.validateAsync(userPayload);
        next();
    }catch(error){
        // next({
        //     message: error.details[0].message,
        //     status: 400
        // });
        return res.status(400).json({
            message: error.details[0].message
        })
    }
}

exports.validateLoginInput = async (req,res,next) => {
    const loginPayload = req.body
    try{
        await loginValidator.validateAsync(loginPayload)
        next();
    }catch(error){
        next({
            message: error.details[0].message,
            status: 400
        })
    }
}