const joi = require("joi");

const createCommentSchema = joi.object({
  comment_text : joi.string().required(),
  user_id: joi.string().required(),
  post_id : joi.string().required()
})
const updateCommentSchema = joi.object({
  comment_text : joi.string().required(),
  comment_id: joi.string().required(),
  post_id : joi.string().required()
})
const deleteCommentSchema = joi.object({
  comment_id: joi.string().required(),
  post_id : joi.string().required()
})
const readCommentSchema = joi.object({
  comment_id: joi.string().required(),
  post_id : joi.string().required()
})

modules.exports = {createCommentSchema,updateCommentSchema,deleteCommentSchema,readCommentSchema}