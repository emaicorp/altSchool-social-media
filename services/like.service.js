const likeModel = require('../schema/like.schema');


class LikeService {
    async createLike(userId, postId) {
       try{
        const newLike = new likeModel({ userId, postId });
        return await newLike.save();
       }catch(error){
        console.log(error);
        throw new Error('Error creating like');
       }
    }
    async deleteLike(userId, postId) {
        try{
            return await likeModel.findOneAndDelete({ userId,  postId });
        }catch(error){
            throw new Error('Error deleting like');
        }
    }
    async countLikesByPost(postId) {
        try{
            return await likeModel.countDocuments({  postId });
        }catch(error){
            throw new Error('Error counting likes');
        }
    }
    async getLikedByUser(userId) {
        try{
            return await likeModel.find({ userId });
        }catch(error){
            throw new Error('Error getting likes by user');
        }
    }
    async getLikedByPost(postId, userId) {
        try{
            return await likeModel.findOne({ userId,  postId });
        }catch(error){
            throw new Error('Error getting like by user and post');
        }
    }
    async deleteAll( ){
        try{
            return await likeModel.deleteMany({});
        }catch(error){
            throw new Error('Error deleting all likes');
        }
    }
}

const likeService = new LikeService();


module.exports = likeService;