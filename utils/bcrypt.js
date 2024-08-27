const bcrypt = require('bcryptjs');

const hashPassword = async(password) => {
    try{
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        return hashedPassword;
    }catch(error){
        console.error(error);
        throw new Error('Failed to hash password');
    }

}

const comparePassword = async(password, hashedPassword) => {
    try{
        return await bcrypt.compare(password, hashedPassword);
        
    }catch(error){
        console.error(error);
        throw new Error('Failed to compare password');
    }
}

module.exports = { hashPassword, comparePassword };