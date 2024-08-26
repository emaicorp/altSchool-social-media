const likeService = require('../services/like.service');
const decryptToken = require('../authenticate/decypt');
const BadRequest = require('../error/error');

class LikeController {
    async createLike(req, res, next) {
        try {
            const { postId } = req.body;
            const user =  await decryptToken(req);
        
            if (user == 'No token provided') {
                throw new BadRequest('No token provided');
            }
            if(user == 'TokenExpiredError')   throw new BadRequest('Token has expired, please login again');

            if(user == 'Invalid token') throw new BadRequest('Invalid token, please try again');

            // const deleted = await likeService.deleteAll()
    
            const existingLike = await likeService.getLikedByPost(postId,user.foundUser._id);
    
            if (existingLike) {
                await likeService.deleteLike(user.foundUser._id,postId);
                return res.status(201).json({ message: 'Like deleted', success: true });
            }
    
            await likeService.createLike(user.foundUser._id,postId);
            return res.status(201).json({ message: 'Like created', success: true });
    
        } catch (error) {
            next(error);
        }
    }

    async getLikesNumber(req, res, next) {
        try {
            const postId = req.params.id
            const likesCount = await likeService.countLikesByPost(postId);
            if (!likesCount) {
                throw new BadRequest('No likes found');
            }
            return res.status(200).json({ message: 'Likes count', success: true, likesCount });
        } catch (error) {
            next(error)
        }
    }
    
}

const likeController = new LikeController();

module.exports = likeController;