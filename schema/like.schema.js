const mongoose = require("mongoose");

const likeSchema = new mongoose.Schema({
	user_id: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "Users"
	},
	post_id: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "Posts"
	},
	created_at: {
		type: Date,
		default: Date.now
	}
});

const likeModel = mongoose.model("Likes", likeSchema);

module.exports = likeModel;