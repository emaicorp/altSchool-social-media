const likeService = require('../services/like.service');
const decryptToken = require('../authenticate/decypt');
const BadRequest = require('../error/error');

class LikeController {
    async createLike(req, res, next) {
        try {
            const { postId } = req.params;
            const userId = decryptToken(req);
    
            if (userId == 'No token provided') {
                throw new BadRequest('No token provided');
            }
            if(userId == 'TokenExpiredError')   throw new BadRequest('Token has expired, please login again');

            if(userId == 'Invalid token') throw new BadRequest('Invalid token, please try again');
    
            const existingLike = await likeService.getLikedByPost(postId, userId);
    
            if (existingLike) {
                await likeService.deleteLike(postId, userId);
                throw new BadRequest({ message: 'Like deleted', success: true });
            }
    
            await likeService.createLike(userId, postId);
            return res.status(201).json({ message: 'Like created', success: true });
    
        } catch (error) {
            next(error);
        }
    }

    async getLikesNumber(postId){
        try {
            const likesCount = await likeService.countLikesByPost(postId);
            return likesCount;
        } catch (error) {
            throw new Error('Error counting likes');
        }
    }
    
}

const likeController = new LikeController();

module.exports = likeController;