const joi = require("joi");

const createPostSchema = joi.object({
  content: joi.string().required().messages({
    "string.base": "Content must be a string",
    "string.required": "Content is required",
  }),
})
const editPost = joi.object({
  content: joi.string().required(),
  userId : joi.string().required(),
  postId : joi.string().required()
})
const userPost = joi.object({
  userId : joi.string().required(),
  postId : joi.string().required()
})
const getOnePost = joi.object({
  id : joi.string().required()
})

module.exports = {createPostSchema,editPost,userPost,getOnePost};