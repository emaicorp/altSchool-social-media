const Joi = require('joi');

const createUserSchema = Joi.object({
    username: Joi.string().alphanum().min(3).max(30).required().messages({
        "string.base": "Username must be a string",
        "string.empty": "Username cannot be empty",
        "string.pattern.base": "Username must be alphanumeric with at least 3 and at most 30 characters",
        "any.required": "Username is required"
    }),
    email: Joi.string().email().required().messages({
        "string.base": "Email must be a string",
        "string.empty": "Email cannot be empty",
        "string.email": "Email must be a valid email address",
        "any.required": "Email is required"
    }),
    password: Joi.string() .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).messages({
        "string.base": "Password must be a string",
        "string.empty": "Password cannot be empty",
        "string.pattern.base": "Password must be alphanumeric with at least 3 and at most 30 characters",
        "any.required": "Password is required"
    }),
    firstName: Joi.string().alphanum().min(2).max(30).required().messages({
        "string.base": "First name must be a string",
        "string.empty": "First name cannot be empty",
        "string.pattern.base": "First name must be alphanumeric with at least 2 and at most 30 characters",
        "any.required": "First name is required"
    }),
    lastName: Joi.string().alphanum().min(2).max(30).required().messages({
        "string.base": "Last name must be a string",
        "string.empty": "Last name cannot be empty",
        "string.pattern.base": "Last name must be alphanumeric with at least 2 and at most 30 characters",
        "any.required": "Last name is required"
    })
})

const updateUserBioSchema = Joi.object({
    bio: Joi.string().max(500).required().messages({
        "string.base": "Bio must be a string",
        "string.empty": "Bio cannot be empty",
        "string.max": "Bio must be less than or equal to 500 characters",
        "any.required": "Bio is required"
    })
})

const login = Joi.object({
    username: Joi.string().messages({
        "string.base": "Username must be a string",
    }),
    email: Joi.string().email().messages({
        "string.base": "Email must be a string",
    }),
    password: Joi.string().required().messages({
        "string.base": "Password must be a string",
        "string.empty": "Password cannot be empty",
        "any.required": "Password is required"
    })
})

const idSchema = Joi.object({
    id: Joi.string().required().messages({
        "string.base": "Id must be a string",
        "string.empty": "Id cannot be empty",
        "any.required": "Id is required"
    })
})

const updatePasswordSchema = Joi.object({
    email: Joi.string().required().messages({
        "string.base": "Email must be a string",
        "string.empty": "Email cannot be empty",
        "string.email": "Email must be a valid email address",
        "any.required": "Email is required"
    }),
    oldPassword: Joi.string().required().messages({
        "string.base": "Old password must be a string",
        "string.empty": "Old password cannot be empty",
        "any.required": "Old password is required"
    }),
    newPassword: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).required().messages({
        "string.base": "New password must be a string",
        "string.empty": "New password cannot be empty",
        "string.pattern.base": "New password must be alphanumeric with at least 3 and at most 30 characters",
        "any.required": "New password is required"
    })
})

module.exports = {createUserSchema, updateUserBioSchema, login, idSchema, updatePasswordSchema} ;
