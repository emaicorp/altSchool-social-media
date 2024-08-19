# Backend for a Social Brand, Based on AltSchool Project. 

## Project Title :
A Social Media Brand 

## Project Description :
Build a Functional Endpoint for a Social Media Brand 

### Functionalities Expected from this social media site/project :

- Users can create accounts and update information on their profiles.
- User Profile Setup and Edit .
- Users should be able to see their Posts on their Profile.
- Complete CRUD functionality for user posts.
- Users can create posts, comment on posts, and like each others posts and comments.
- Newly Created accounts have to be activated via Email on User sign Up. 
- App has 'forgot password' option allowing users to reset password by emailing them a special temporary access token. 
- Authentication and Authorization: Implementing user authentication (login, registration, password reset) and authorization (defining roles and permissions) to control access to various parts of the application.
- File Handling: Uploading   downloading, and managing files such as images, documents, and media files.
- Implementing real-time functionality: live chat and sending of notifications 
                          
  ### Notable Dependencies 

- API is created using ExpressJs
- Es Lint used for Text formatting 
- JWT was used for authentication and authorization 
- Joi Validator for Validation 
- Bitcrypt used for hashing password 
- Using MongoDB and Mongoose ODM for Database 
- DB schema to Generate Schema 
- Nodemailer for sending emails, email use jade template 
- Cloudinary for Image Upload
- Socket.io will be used for Notifications and instant Messaging 
- Mutler for file Uploads

# Table of Content :

- Installation 
- Usage 
- Project Structure 
- Testing 
- Contributing 
- License 
- Contact 

## Installation

### Prerequisites 
- npm >= 1.1
- Node.js >= 17.0 ✳️
- Postman 
- mongoDB 

### Clone the Repository :
Fork the Github  repo and Create your own branch with your name. 

- ```bash 
- git clone https : //github.com/yourusername/altschool-social-media.git

### Install Dependencies :
Use the npm command to install Node.js packages. 
- npm install 

### Environment Variables :
Create a `.env ` file in the root directory and add the following :

- Add the keys for JWT
- Keys for Cloudinary 
- Etc

-Usage 

### Running the application :
Use the command to start the server on gitbash 

- npm  run start 

API Endpoints : 
Available API endpoints, Requests methods, required parameters, and responses. 

- Authentication :
-Post /auth/register : Register a new user 
-Post /auth/login  : Authenticate a user

- Posts 

- Profile 

- Likes & Comments

-Project Structure :

The folder structure of this Project 
- git
- authenticate
- config 
- controller 
- joiSchema
- middleware 
- node_modules
- routes
- schema
- services 
- .env
- .eslintignore
- .eslintrc.json
- .gitignore
- CONTRIBUTION.md
- package-lock.json
- package.json
- README.md

-Run Tests/Testing :
How to run tests.

- npm run test 

-Contributing :

- Contributions, issues and feature requests are welcomed! 
- Feel Free to check the Issues.....
- Confirm before pushing to the Main Branch

-License : ✳️


-Contacts, Author & Credits :

- This project was worked On by AltSchool Backend as a Team, link to the Github here..........
- This structure should cover everything someone need to understand and use this Project effectively. Let us know if need more details on any specific Part!.
