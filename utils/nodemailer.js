const nodemailer = require("nodemailer");
const path = require('path');
const fs = require('fs/promises');
const { fileURLToPath } = require('url'); 
const htmlFilePath = path.join(__dirname, '../html', 'verification.html');

const transporter = nodemailer.createTransport({
  host: "smtp.ethereal.email",
  port: 587,
  secure: false, // Use `true` for port 465, `false` for all other ports
  auth: {
    user: process.env.googleUsername,
    pass: process.env.googlePassword,
  },
});


const message = async(link,username) => {
    try{
     const data = await fs.readFile(htmlFilePath, 'utf8');
     const html = data.replace('[Verification Link]' , link).replace('[User]', username)
     return html;
    }catch(error){
        console.log(error);
    }

}
const sendVerificationMessage = async(email, link, username) =>{
    try{
        await transporter.sendMail({
            from: process.env.googleUsername,
            to: email,
            subject: "Email Verification",
            text: `Please click the following link to verify your email`,
            html: await message(link, username),
        });
        console.log("Message sent: %s", info.messageId);
    }catch(error){
        console.log(error);
    }
}
module.exports = sendVerificationMessage