const verifyJwt = require('../utilities/jwt')
const userInstance = require('../services/user.services')


async function isAuth (req, res, next) {

   // Check if the Authorization header exists
  if (req.headers.authorization) {
    // Check if the Authorization header starts with 'Bearer'
    if (req.headers.authorization.startsWith('Bearer')) { 
        try{
            // get token from client
            const accessToken = req.headers.authorization.split(' ')[1] || '';
            if (!accessToken) {
               console.log('No token')
               return next()
           }
                // decodes the token into the signed object
                const decoded = verifyJwt(accessToken)
                if(decoded){
                    // passes decoded token into the req object as req.user
                   const user = await userInstance.getOneUser(decoded.id)
                   req.user = user
                } else {
                    res.status(403).send('Forbidden')
                }
                return next()
                   } catch (err) {
                       console.log(err)
                       // Handle token verification errors
        return res.status(401).json({ error: 'Invalid or expired token' });
    }
                   }
    
                   else {
                    // Handle the case where the header does not start with 'Bearer'
                    return res.status(401).json({ error: 'Invalid token format' });
                  }
                } else {
                  // Handle the absence of the Authorization header
                  return res.status(401).json({ error: 'Access denied. No token provided.' });
                }
            }

            // check user role
const role = async (req, res, next) => {
    const {email} = req.user
    const user = await userInstance.findOneUser(email)
    if(user.role !== 'admin') {
        return res.status(400).json('You are not an admin')
        // throw new Error ('You are not an admin')
    }
    else {
        next()
    }
}

module.exports = {isAuth, role}