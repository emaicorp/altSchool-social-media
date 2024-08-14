const express = require("express");
const app = express();


app.use(express.json());

app.use("/", (req, res )=>{
	res.json("Welcome to the API");
});

app.use("*", (req, res) =>{
	res.json("ROUTE NOT FOUND");
});

module.exports = app;