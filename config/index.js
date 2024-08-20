// Load environment variables from .env file
require('dotenv').config();

configVariables= {
  port: process.env.PORT || 5000,
  mongoURI: process.env.MONGO_URI,
  jwtSecret: process.env.JWT_SECRET,
  nodeEnv: process.env.NODE_ENV || 'development',
};

modules.exports = configVariables;
