const mongoose = require("mongoose");

const passwordResetSchema = new mongoose.Schema({
    user_id : {
        
    }
});
const passwordResetModel = mongoose.Model("passwordReset", passwordResetSchema);
module.exports = passwordResetModel;