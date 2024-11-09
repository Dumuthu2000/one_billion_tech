import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();

export const verifyToken=(req, res, next)=>{
    //Spliting token from request header
    const token = req.headers['Authorization']?.split(' ')[1];

    //Check the token
    if(!token){
        return res.status(401).json({ message: 'Access denied. No token provided.' });
    }

    try {
        const decodedToken = jwt.verify(token, process.env.JWT_SECRET_KEY);
        req.user = decodedToken; //Store decoded user data into request object
        next(); //Proceed to the next middleware or route
    } catch (error) {
        res.status(403).json({ message: 'Invalid or expired token.' });
    }
}