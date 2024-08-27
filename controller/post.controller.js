const postInstance = require ('../services/post.service');
const cloudinary = require('cloudinary').v2;
const BadRequest = require('../error/error');
const decryptToken = require('../authenticate/decypt');
const fs = require('fs');

class PostController {
    async createPost(req, res, next) {
        try {
            const { content } = req.body;
            const imageUrl = req.file;

            const user = await decryptToken(req);
            if (user === 'No token provided') throw new BadRequest('No token provided');
            if (user === 'TokenExpiredError') throw new BadRequest('Token has expired, please login again');
            if (user === 'Invalid token') throw new BadRequest('Invalid token, please try again');
    
            // Check if an image was uploaded and upload it to Cloudinary if present
            const image = imageUrl ? await cloudinary.uploader.upload(imageUrl.path, { folder: 'user_pictures' }) : null;
            if(image){
                fs.unlinkSync(imageUrl.path); // Delete the uploaded image file
            }
    
            // Create the post with the user ID, content, and image URL if it exists
            const newPost = await postInstance.createPost(user.foundUser._id, content, image?.secure_url);
    
            // Respond with the created post and a success message
            res.status(201).json({
                message: 'Post created successfully',
                success: true,
                post: newPost
            });
        } catch (error) {
            next(error);
        }
    }

    async getAllPosts(req, res, next) {
        try{
            const page = parseInt(req.query.page) || 1;
            const limit = parseInt(req.query.limit) || 10;
           
            const startIndex = (page - 1) * limit;

            const totalPosts = await postInstance.getAllPosts();
            if (totalPosts === 0) throw new BadRequest('No posts found');

            const allPosts = await postInstance.getAllPosts();
            const paginatedPost =  allPosts.slice(startIndex, startIndex + limit);

            res.json({
                posts: paginatedPost,
                page,
                totalPages: Math.ceil(totalPosts / limit),
                success: true,
            });
        }catch(error){
            next(error)
        }
    }

    async getPostById(req, res, next) {
        try{
            const id = req.params.id;
            const foundPost = await postInstance.getPostById(id);

            if(!foundPost) throw new BadRequest('Post not found')
            res.json({post: foundPost, success: true,})
        }catch(error){
            next(error)
        }
    }
    async deletePost(req, res, next){
        try{
            const id = req.params.id;
            const deletedPost = await postInstance.deletePost(id);

            if(!deletedPost) throw new BadRequest('Post not found')
            res.json({message: 'Post deleted successfully', success: true,})
        }catch(error){
            next(error)
        }
    }
    async updatePost(req, res, next){
        try{
            const {content} = req.body;
            const id = req.params.id;
            const imageUrl = req.file;

            const findPost = await postInstance.getPostById(id);
            if(!findPost) throw new BadRequest('Post not found')

            const image = imageUrl ? await cloudinary.uploader.upload(imageUrl.path, { folder: 'user_pictures' }) : null;

            const updatedPost = await postInstance.updatePost(id, content, image?.secure_url);

            if(!updatedPost) throw new BadRequest('Post not found')
            res.json({post: updatedPost, success: true,})
        }catch(error){
            next(error)
        }
    }

    async getPostsByUser(req, res, next){
        try{
    
            const user = await decryptToken(req);
            if (user === 'No token provided') throw new BadRequest('No token provided');
            if (user === 'TokenExpiredError') throw new BadRequest('Token has expired, please login again');
            if (user === 'Invalid token') throw new BadRequest('Invalid token, please try again');

            const posts = await postInstance.getPostByUser(user.foundUser._id);
            if(!posts) throw new BadRequest('Posts not found')
            res.json({posts: posts, success: true,})
        }catch(error){
            next(error)
        }
    }
    
}

const postController = new PostController();

module.exports = postController;