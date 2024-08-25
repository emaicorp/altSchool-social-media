const postModel = require('../schema/post.schema');

class PostService {
    async createPost(userId, content, imageUrl) {
       try{
        const newPost = new postModel({ userId, content, imageUrl });
        return await newPost.save();
       }catch(error){
         throw new Error('Error creating post');
       }
    }

    async getAllPosts() {
        try{
         return await postModel.find().populate('userId', 'username');
        }catch(error){
          throw new Error('Error getting all posts');
        }
    }

    async getPostById(postId) {
        try{
         return await postModel.findById(postId).populate('userId', 'username');
        }catch(error){
          throw new Error('Error getting post by id');
        }
    }

    async updatePost(postId, content, imageUrl) {
        try{
         const updatedPost = await postModel.findByIdAndUpdate(postId, { content, imageUrl }, { new: true });
         if(!updatedPost){
            throw new Error('Post not found');
         }
         return updatedPost;
        }catch(error){
          throw new Error('Error updating post');
        }
    }

    async deletePost(postId) {
        try{
         const deletedPost = await postModel.findByIdAndDelete(postId);
         if(!deletedPost){
            throw new Error('Post not found');
         }
         return deletedPost;
        }catch(error){
          throw new Error('Error deleting post');
        }
    }

    async getPostByUser(userId) {
        try{
         return await postModel.find({ userId }).populate('userId', 'username');
        }catch(error){
          throw new Error('Error getting posts by user');
        }
    }
}

const postInstance = new PostService();