const joi = require('joi');

const loginSchema = joi.object({
    username : joi.string().required(),
    password : joi.string().required()
})
const resetPassowrdSchema = joi.object({
  old_password : joi.string().required(),
  new_password : joi.string().required(),
  confirm_new_password : joi.string().required()
})

module.exports = {loginSchema,resetPassowrdSchema}