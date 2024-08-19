const mongoose = require("mongoose");

const passwordResetSchema = new mongoose.Schema({
	user_id: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "Users",
		required: true
	},
	reset_token: {
		type: String,
		required: true
	},
	created_at: {
		type: Date,
		default: Date.now()
	}
});

const passwordResetModel = mongoose.model("passwordReset", passwordResetSchema);
module.exports = passwordResetModel;
