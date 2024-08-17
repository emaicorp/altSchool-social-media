const express = require("express");
const joiValidator = require("joiValidator");
const router = express.Router();
const {registerUserSchema,loginUserSchema} = require("../joiSchema");
const {registerUser,loginUser} = require("../controller");
const {isAuth,getUserProfile} = require("../middleware");





router.post("/register", joiValidator(registerUserSchema), registerUser);
router.post("/login", joiValidator(loginUserSchema), loginUser);

router.get("/user", isAuth, getUserProfile );