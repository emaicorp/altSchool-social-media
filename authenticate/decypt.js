const jwt = require('jsonwebtoken');

const decryptToken = async (req) => {
    try {
        const token = req.headers.authorization?.split(' ')[1];
        if (!token) return ('No token provided');

        const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
        return  decodedToken;
    } catch (error) {
        // Check if the error is related to token expiration
        if (error.name === 'TokenExpiredError') {
            return('Token has expired');
        }
        // For other errors (e.g., invalid signature, malformed token)
        return('Invalid token');
    }
}

module.exports = decryptToken;