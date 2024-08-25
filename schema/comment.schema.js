const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema({
	userId: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "Users"
	},
	postId: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "Posts"
	},
	commentText:{
		type: String,
		required: true
	},
	created_at: {
		type: Date,
		default: Date.now
	}
});

const commentModel = mongoose.model("comments", commentSchema);

module.exports = commentModel;