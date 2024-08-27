const joi = require("joi");

const createCommentSchema = joi.object({
  commentText : joi.string().required().messages({
    "string.required": "Comment text is required"
  }),
  postId : joi.string().required().messages({
    "string.required": "Post id is required"
  })
})
const updateCommentSchema = joi.object({
  commentId: joi.string().required().messages({
    "string.required": "Comment id is required"
  }),
  commentText : joi.string().required().messages({
    "string.required": "Comment text is required"
  })
})
const deleteCommentSchema = joi.object({
  commentId: joi.string().required(),
  
})


module.exports = {createCommentSchema,updateCommentSchema,deleteCommentSchema,}