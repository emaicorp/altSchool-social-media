const express = require("express");
const router =  express.Router();
const userRoute = require("./user.js");
const postRoute = require("./post.js");
const authRoute = require("./auth");


router.use("/register", userRoute);
router.use("/:id", userRoute);
router.use("/", postRoute);
router.use("/", authRoute);

