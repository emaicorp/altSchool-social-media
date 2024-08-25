const likeModel = require('../schema/like.schema');


class LikeService {
    async createLike(userId, postId) {
       try{
        const newLike = new likeModel({ user_id: userId, post_id: postId });
        return await newLike.save();
       }catch(error){
        throw new Error('Error creating like');
       }
    }
    async deleteLike(userId, postId) {
        try{
            return await likeModel.findOneAndDelete({ user_id: userId, post_id: postId });
        }catch(error){
            throw new Error('Error deleting like');
        }
    }
    async countLikesByPost(postId) {
        try{
            return await likeModel.countDocuments({ post_id: postId });
        }catch(error){
            throw new Error('Error counting likes');
        }
    }
    async getLikedByUser(userId) {
        try{
            return await likeModel.find({ user_id: userId });
        }catch(error){
            throw new Error('Error getting likes by user');
        }
    }
    async getLikedByPost(postId, userId) {
        try{
            return await likeModel.findOne({ user_id: userId, post_id: postId });
        }catch(error){
            throw new Error('Error getting like by user and post');
        }
    }
}

const likeService = new LikeService();


module.exports = likeService;