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
    licensingBoard: Joi.string()
                .required(),
    licenseNumber: Joi.string()
                .required(),
    passwordConfirm: Joi.ref('password'),
    passwordResetToken: [Joi.string(), Joi.number()],
    passwordResetExpires: Joi.date(),
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
        next({
            message: error.details[0].message,
            status: 400
        });
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