const joi  = require("joi");

const authSchema = joi.object({
  auth_token : joi.string().required()
})


modules.exports = {authSchema};