const Joi = require('joi');

const postId = Joi.object({
    postId: Joi.string().required().messages({
        "string.base": "Post ID must be a string",
        "string.required": "Post ID is required"
    })
})

module.exports = postId;