=const userModel = require('../schema/user.schema');

class UserServices {
    async createUser(userInfo){
        const newUser = new userModel(userInfo);
        const saveUser = await newUser.save();
        return saveUser;
    }
    async findAlluser(){
        const allUsers = await userModel.find();
        return allUsers;
    }
    async findOneuser(id){
        const foundUser =  await userModel.findOne({_id:id});
        return foundUser;
    }
    async findUserByUsername(username){
        const foundUser = await userModel.findOne({username: username});
        return foundUser;
    }
    async updateUser(id, userInfo){
        const updateUser = await userModel.findOneAndUpdate ({_id :id}, userInfo, {new:true});
        return updateUser;
    }
    async deleteUser(id){
        const deleteUser = await userModel.findOneAndDelete({_id:id});
        return deleteUser;
    }
};

const userInstance = new UserServices();

module.exports = userInstance;