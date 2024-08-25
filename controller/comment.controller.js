const commentService = require('../services/comment.serivce');

class CommentController {
    async createComment(req, res, next) {
        try {
            const { postId, commentText } = req.body;

            const user = decryptToken(req);
            if (user === 'No token provided') throw new BadRequest('No token provided');
            if (user === 'TokenExpiredError') throw new BadRequest('Token has expired, please login again');
            if (user === 'Invalid token') throw new BadRequest('Invalid token, please try again');
            
            await commentService.createComment(user.id, postId, commentText);
            res.status(201).json({ message: 'Comment created successfully' });
        } catch (error) {
            next(error);
        }
    }

    async getCommentsByPost(req, res, next) {
        try {
            const { postId } = req.params;
            const comments = await commentService.getCommentsByPost(postId);
            res.json(comments);
        } catch (error) {
            next(error);
        }
    }

    async deleteComment(req, res, next) {
        try {
            const { commentId } = req.params;
            await commentService.deleteComment(commentId);
            res.status(204).send();
        } catch (error) {
            next(error);
        }
    }

    async updateComment(req, res, next) {
        try {
            const { commentId, commentText } = req.body;
            const updatedComment = await commentService.updateComment(commentId, commentText);
            res.json(updatedComment);
        } catch (error) {
            next(error);
        }
    }

}

const commentController = new CommentController();


module.exports = commentController;