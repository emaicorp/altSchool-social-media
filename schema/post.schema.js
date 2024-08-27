const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
	userId: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "Users",
		required: true
	},
	content:{
		type: String,
		required: true
	},
	imageUrl:{
		type: String,
		required: false,
		default : null
	},
	createdAt:{
		type: Date,
		default: Date.now
	},
	updatedAt:{
		type: Date,
        default: Date.now
	}
});

const postModel = mongoose.model("Posts", postSchema);

module.exports = postModel;