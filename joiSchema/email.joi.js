const joi = require("joi");

const emailVerifySchema = joi.object({
  email : joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }).required(),
  verification_code : joi.string().required()
})

modules.exports = {emailVerifySchema}