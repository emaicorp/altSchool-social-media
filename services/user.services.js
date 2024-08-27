const userModel = require('../schema/user.schema');


class UserServices {
    async createUser(userInfo){
       try{
            const newUser = new userModel(userInfo);
            const saveUser = await newUser.save();
            return saveUser;
       }catch(error){
        console.log(error);
       }
    }
    async findAlluser(){
        try{
            const allUsers = await userModel.find();
            return allUsers;
        }catch(error){
            console.log(error);
        }
    }
    async findOneuser(id){
       try{
            const foundUser =  await userModel.findOne({_id:id});
            return foundUser;
       }catch(error){
        console.log(error);
       }
    }
    async findUserByUsername(username){
        try{
            const foundUser = await userModel.findOne({username: username});
            return foundUser;
        }catch(error){
            console.log(error);
        }
    }
    async updateUserBio(id, Bio){
       try{
            const updatedUser = await userModel.findByIdAndUpdate(id, {bio:Bio},{new: true});
            return updatedUser;
       }catch(error){
        console.log(error);
       }
    }
    async updateUserProfilePicture(id, ProfilePicture){
        try{
            const updatedUser = await userModel.findByIdAndUpdate(id, {profilePictureUrl: ProfilePicture},{new: true});
            return updatedUser;
        }catch(error){
            console.log(error);
        }
    }
    async deleteUser(id){
        try{
            const deleteUser = await userModel.findOneAndDelete({_id:id});
            return deleteUser;
        }catch(error){
            console.log(error);
        }
    }
    async findUserByEmail(email){
        try{
            const foundUser = await userModel.findOne({email: email});
            return foundUser;
        }catch(error){
            console.log(error);
        }
    }
    async verifyEmail(email){
        try{
            const foundUser = await userModel.findOneAndUpdate({email: email}, {emailVerified: true},{new: true});
            return foundUser;
        }catch(error){
            console.log(error);
        }
    }
    async addVerificationToken (id,token){
        try{
            const updatedUser = await userModel.findOneAndUpdate({_id:id}, {verificationToken: token},{new: true});
            return updatedUser;
        }catch(error){
            console.log(error);
        }
    }
    async updatePassword(email,password){
        try{
            const updatedUser = await userModel.findOneAndUpdate({email: email}, {password: password},{new: true});
            return updatedUser;
        }catch(error){
            console.log(error);
        }
    }
};

const userInstance = new UserServices();

module.exports = userInstance;