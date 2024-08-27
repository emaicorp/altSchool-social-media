const express = require("express");
const router = express.Router();
const upload = require("../utils/multer");
const validator = require("../middleware/validator");
const {createUserSchema} = require("../joiSchema/user.joi");
const {updateUserBioSchema} = require("../joiSchema/user.joi");
const {idSchema} = require("../joiSchema/user.joi");
const {login} = require("../joiSchema/user.joi");
const {updatePasswordSchema} = require("../joiSchema/user.joi");
const postController = require("../controller/post.controller");
const userController = require("../controller/user.controller");
const likeController = require("../controller/likes.controller");
const commentController = require("../controller/comment.controller");
const {createPostSchema} = require("../joiSchema/post.joi");
const {createCommentSchema} = require("../joiSchema/comment.joi");
const {updateCommentSchema} = require("../joiSchema/comment.joi");
const {deleteCommentSchema} = require("../joiSchema/comment.joi");
const postId = require("../joiSchema/like.joi");

// middleware for authentication
const authorization = require("../authenticate/verifytoken");


router.post("/posts", authorization,upload.single("file"),[validator(createPostSchema)], postController.createPost);
router.get("/all/post", authorization,postController.getAllPosts);
router.get("/posts/:id",authorization, [validator(idSchema, "params")],postController.getPostById);
router.delete("/posts/:id", authorization,[validator(idSchema, "params")],postController.deletePost);
router.patch("/posts/:id", authorization,upload.single("file"), [validator(idSchema,"params")],postController.updatePost);
router.get("/post/user", authorization,postController.getPostsByUser);

router.post("/users", [validator(createUserSchema)],userController.createUser);
router.post("/users/login", [validator(login)],userController.login);
router.get("/users/:id", [validator(idSchema, "params")],userController.getUserById);
router.patch("/users/:id", [validator(idSchema, "params")],upload.single("file"),userController.updateUserProfilePicture);
router.patch("/users/bio/:id", [validator(updateUserBioSchema)], userController.updateAUserBio);
router.patch("/users/password/:id",[validator(updatePasswordSchema)] ,userController.updatePassword);
router.get("/verify-email", userController.verifyUserEmail);
router.get("/usersAll", userController.getAllUsers);
router.delete("/users/:id", [validator(idSchema,"params")],userController.deleteUser);

router.post("/likes", authorization,[validator(postId)],likeController.createLike);
router.get("/likes/number/:id", authorization,likeController.getLikesNumber);


router.post("/comments", authorization,[validator(createCommentSchema)],commentController.createComment);
router.get("/comments/:id", authorization,commentController.getCommentsByPost);
router.delete("/comments/:commentId", authorization,[validator(deleteCommentSchema)],commentController.deleteComment);
router.put("/comments/:commentId", authorization,[validator(updateCommentSchema)],commentController.updateComment);

module.exports = router;

