const express = require("express");
const router = express.Router();
const {newPost, getPosts,getPost} = require("../controller/index");


router.post("/", newPost);
router.get("/",getPosts);
router.get("/",getPost);