const express = require("express");
const router = express.Router();
const {registerUser, logInUser} = require("../controller/index");

router.post("/register", registerUser);

router.get("/:id", logInUser);
 
 

module.exports = router;