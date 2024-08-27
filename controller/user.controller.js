const userInstance = require('../services/user.services');
const cloudinary = require('../utils/cloudinary')
const BadRequest = require('../error/error');
const {hashPassword} = require('../utils/bcrypt');
const {comparePassword} = require('../utils/bcrypt');
const generateToken = require('../utils/generateToken');
const sendVerificationMessage = require('../utils/nodemailer');
const jwt = require('jsonwebtoken');
const fs = require('fs');

class UserController {
    async createUser(req, res, next) {
        try{
            const {username, email, password, firstName, lastName,} = req.body;
            
            const checkForUsername = await userInstance.findUserByUsername(username);
            if(checkForUsername) throw new BadRequest('Username already exists')
            
            const checkForEmail = await userInstance.findUserByEmail(email);
            if(checkForEmail)  throw new BadRequest('Email already exists')
            
            const userInfo = {
                username,
                email,
                password: await hashPassword(password),
                firstName,
                lastName,
            }
            const newUser =  await userInstance.createUser(userInfo);

            // Generate OTP
            const OTP = generateToken();

            // Send verification email
            const token = jwt.sign({email, OTP},process.env.JwtSecret, {expiresIn: '12h'} );
            const link = `http://localhost:8000/api/verify-email?token=${token}`;

            sendVerificationMessage(email, link, firstName);
            const saveToken = await userInstance.addVerificationToken(newUser._id,token);

            res.status(201).json({message: 'User created successfully',success: true,})
        }catch(error){
            next(error)
        }
    }
    async verifyUserEmail(req, res, next) {
        try{
            const {token} = req.query;
            const decodedToken = jwt.verify(token, process.env.JwtSecret);
            if(!decodedToken) throw new BadRequest('Invalid token');

            const {email, OTP} = decodedToken;

            const foundUser = await userInstance.findUserByEmail(email);
            if(!foundUser) throw new BadRequest('User not found');

            const confirm = jwt.verify(foundUser.verificationToken, process.env.JwtSecret);
            if(confirm.OTP !== OTP) throw new BadRequest(' verification token is incorrect');
            const updatedUser = await userInstance.verifyEmail(email);

            res.json({message: 'Email verified successfully', success: true,})
        }catch(error){
            next(error)
        }
    }
    async getAllUsers(req, res, next) {
        try {
            // Extract page and limit from query parameters, with default values
            const page = parseInt(req.query.page) || 1; // Default to page 1
            const limit = parseInt(req.query.limit) || 10; // Default to 10 users per page
    
            // Calculate the starting index for the query
            const startIndex = (page - 1) * limit;
    
            // Get the total number of users
            const totalUsers = await userInstance.findAlluser(); 
            if (totalUsers === 0) throw new BadRequest('No users found');
    
            const users = await userInstance.findAlluser();
            const paginatedUsers = users.slice(startIndex, startIndex + limit);
    
            res.json({
                users: paginatedUsers,
                page,
                totalPages: Math.ceil(totalUsers / limit),
                success: true,
            });
        } catch (error) {
            next(error);
        }
    }

    async getUserById(req, res, next) {
        try{
             const id = req.params.id;
             const foundUser = await userInstance.findOneuser(id);

             if(!foundUser) throw new BadRequest('User not found')
             res.json({user: foundUser, success: true,})
        }catch(error){
            next(error)
        }
    }

    async updateAUserBio(req, res, next){
        try{
             const {bio} = req.body;
             const {id} = req.params;
        
             const updatedUser = await userInstance.updateUserBio(id, bio);

             if(!updatedUser) throw new BadRequest('User not found')
             res.json({user: updatedUser, success: true,})
        }catch(error){
            next(error)
        }
    }
    async updateUserProfilePicture(req, res, next){
        try{
            const file = req.file
            const {id} = req.params;
        
            if(!file) throw new BadRequest(' cannot find profile picture');

            const foundUser = await userInstance.findOneuser(id);
            if(!foundUser) throw new BadRequest(' cannot find user');

            const uploadResult = await cloudinary.uploader.upload(file.path, { folder: 'user_pictures' });
            if(!uploadResult) throw new BadRequest(' cannot upload profile picture');

            fs.unlinkSync(file.path); // Delete the temporary uploaded file
            const updatedUser = await userInstance.updateUserProfilePicture(id, uploadResult.secure_url);

            res.json({user: updatedUser, success: true,})
            
        }catch(error){
            next(error)
        }
    }
    async deleteUser(req, res, next){
        try{
             const id = req.params.id;
             const deletedUser = await userInstance.deleteUser(id);

             if(!deletedUser) throw new BadRequest('User not found')
             res.json({message: 'User deleted successfully', success: true,})
        }catch(error){
            next(error)
        }
    }

    async updatePassword(req, res, next){
        try{
             const {email, oldPassword, newPassword} = req.body;

             const foundUser = await userInstance.findUserByEmail(email)
             if(!foundUser) throw new BadRequest('User not found');

             const isPasswordValid = await  comparePassword(oldPassword, foundUser.password);
             if(isPasswordValid) throw new BadRequest('please try a new password');

             const hashedPassword= await hashPassword(newPassword);
 
             const updatedUser = await userInstance.updatePassword(email, hashedPassword);
             res.json({user: updatedUser, success: true,})
        }catch(error){
            next(error)
        }
    }

    async login(req, res, next) {
        try {
            const { username, email, password } = req.body;
    
            if (!username && !email) {
                throw new BadRequest('Please provide either a username or email.');
            }
    
            // Determine the method of identification (username or email)
            const identifier = username ? { username } : { email };
    
            // Find the user by username or email
            const foundUser = username ? await userInstance.findUserByUsername(username) : await userInstance.findUserByEmail(email);
    
            if (!foundUser) {
                throw new BadRequest('Invalid username or password');
            }
    
            // Validate the password
            const isPasswordValid = await comparePassword(password, foundUser.password);
            if (!isPasswordValid) {
                throw new BadRequest('Invalid username or password');
            }
    
            // Generate the authentication token
            const token = jwt.sign({ foundUser }, process.env.JwtSecret, {expiresIn: '12h'});
    
            // Respond with the token
            res.json({ message:'user logged in successfully',token, success: true });
        } catch (error) {
            next(error);
        }
    }
    
    
}

const userController = new UserController();
module.exports = userController;