const express = require("express");
const app = express();

const router = require("./routes/route");
const errorHandling = require("./error/async.Error")
const mongoDBConnection = require('./config/db.config')
const dotenv =require('dotenv');

dotenv.config();

// Connect to MongoDB
mongoDBConnection();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api", router);

// Error handling middleware
app.use(errorHandling);

module.exports = app;