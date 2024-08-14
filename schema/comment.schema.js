const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema({
	user_id: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "Users"
	},
	post_id: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "Posts"
	},
	comment_text:{
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