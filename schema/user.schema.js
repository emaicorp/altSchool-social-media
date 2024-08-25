const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
	username:{
		type:String,
		required: true,
		unique: true
	},
	email:{
		type: String,
		required: true,
		unique: true
	},
	password:{
		type: String,
		required: true
	},
	firstName:{
		type: String,
		required: true
	},
	lastName:{
		type: String,
		required: true
	},
	bio:{
		type: String,
		default : null,
		required: false
	},
	profilePictureUrl:{
		type: String,
		default : null,
		required: false
	},
	emailVerified:{
		type: Boolean,
		default : false,
		required: false
	},
	verificationToken:{
		type: String,
		default : null,
		required: false
	},
	passwordResetToken:{
		type: String,
		default : null,
		required: false
	},
	createdAt:{
		type: Date,
		default: Date.now()
	},
	updatedAt: {
		type: Date,
        default: Date.now()
	}
	
});


const userModel =  mongoose.model("Users", userSchema);
module.exports = userModel;