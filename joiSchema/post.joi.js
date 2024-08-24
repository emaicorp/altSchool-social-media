const joi = require("joi");

const createPost = joi.object({
  content: joi.string().required(),
  user_id : joi.string().required()
})
const editPost = joi.object({
  content: joi.string().required(),
  user_id : joi.string().required(),
  post_id : joi.string().required()
})
const userPost = joi.object({
  user_id : joi.string().required(),
  post_id : joi.string().required()
})
const getOnePost = joi.object({
  post_id : joi.string().required()
})

modules.exports = {createPost,editPost,userPost,getOnePost};