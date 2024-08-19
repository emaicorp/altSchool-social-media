// const {type} = require("express/lib/response");
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
	username:{
		type:String,
		required: true,
		unique: true
	},
	email :{
		type: String,
		required: true,
		unique: true
	},
	password_hash:{
		type: String,
		required: true
	},
	first_name:{
		type: String,
		required: true
	},
	last_name:{
		type: String,
		required: true
	},
	bio:{
		type: String,
		default : null,
		required: false
	},
	profile_picture_url:{
		type: String,
		default : null,
		required: false
	},
	email_verified :{
		type: Boolean,
		default : false,
		required: false
	},
	verification_token:{
		type: String,
		default : null,
		required: false
	},
	password_reset_token : {
		type: String,
		default : null,
		required: false
	},
	created_at : {
		type: Date,
		default: Date.now()
	}
	


});


const userModel =  mongoose.model("Users", userSchema);
module.exports = userModel;