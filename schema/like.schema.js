const mongoose = require("mongoose");

const likeSchema = new mongoose.Schema({
	userId: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "Users"
	},
	postId: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "Posts"
	},
	createdAt: {
		type: Date,
		default: Date.now
	}
});

const likeModel = mongoose.model("Likes", likeSchema);

module.exports = likeModel;