const commentModel = require('../schema/comment.schema');

class CommentService {
    async createComment(userId, postId, commentText) {
        try{
            const comment = new commentModel({ userId, postId, commentText });
             await comment.save();
        }catch(error){
            throw new Error('Error creating comment');
        }
    }

    async getCommentsByPost(postId) {
        try{
            const comment =  await commentModel.find({ postId })
            return comment;
        }catch(error){
            throw new Error('Error getting comments by post');
        }
    }

    async deleteComment(commentId) {
       try{
        await commentModel.findByIdAndDelete(commentId);
       }catch(error){
        throw new Error('Error deleting comment');
       }
    }

    async updateComment(commentId, commentText) {
        try{
            const updatedComment = await commentModel.findByIdAndUpdate(commentId, { commentText }, { new: true });
            return updatedComment;
        }catch(error){
            throw new Error('Error updating comment');
        }
    }

}

const commentService = new CommentService();
module.exports = commentService;