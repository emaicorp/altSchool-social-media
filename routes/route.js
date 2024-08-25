const express = require('express');
const router = express.Router();
const upload = require('../utils/multer');
const validator = require('../middleware/validator');
const createUserSchema = require('../joiSchema/user.joi');
const updateUserBioSchema = require('../joiSchema/user.joi');
const idSchema = require('../joiSchema/user.joi');
const login = require('../joiSchema/user.joi');
const updatePasswordSchema = require('../joiSchema/user.joi');
const postController = require('../controller/post.controller');
const userController = require('../controller/user.controller');
const likeController = require('../controller/likes.controller');
const commentController = require('../controller/comment.controller');
const createPostSchema = require('../joiSchema/post.joi')
const createCommentSchema = require('../joiSchema/comment.joi');
const updateCommentSchema = require('../joiSchema/comment.joi');
const deleteCommentSchema = require('../joiSchema/comment.joi');
const postId = require('../joiSchema/like.joi')

// middleware for authentication
const authorization = require('../authenticate/verifytoken')


router.post('/posts', authorization,[validator(createPostSchema)],upload.single('file'), postController.createPost);
router.get('/posts', authorization,postController.getAllPosts);
router.get('/posts/:id',authorization, [validator(idSchema, 'params')],postController.getPostById);
router.delete('/posts/:id', authorization,[validator(idSchema, 'params')],postController.deletePost);
router.put('/posts/:id', authorization,upload.single('file'), postController.updatePost);
router.get('/posts/user/:id', authorization,[validator(idSchema, 'params')],postController.getPostsByUser);

router.post('/users', [validator(createUserSchema)],userController.createUser);
router.post('/users/login', [validator(login)],userController.login);
router.get('/users/:id', [validator(idSchema, 'params')],userController.getUserById);
router.patch('/users/:id', [validator(idSchema)],upload.single('file'),userController.updateUserProfilePicture);
router.put('/users/bio/:id', [validator(updateUserBioSchema)], userController.updateAUserBio);
router.put('/users/password/:id',[validator(updatePasswordSchema)] ,userController.updatePassword);
router.get('/users/verification/:token', userController.verifyUserEmail);
router.get('/users/all', userController.getAllUsers)
router.delete('/users/:id', [validator(idSchema,'params')],userController.deleteUser);

router.get('/likes', authorization,[validator(postId,'params')],likeController.createLike);
router.get('/likes/number', authorization,likeController.getLikesNumber);


router.post('/comments', authorization,[validator(createCommentSchema)],commentController.createComment);
router.get('/comments/:postId', authorization,commentController.getCommentsByPost);
router.delete('/comments/:commentId', authorization,[validator(deleteCommentSchema)],commentController.deleteComment);
router.put('/comments/:commentId', authorization,[validator(updateCommentSchema)],commentController.updateComment);

module.exports = router;

