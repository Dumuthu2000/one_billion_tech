import dotenv from 'dotenv';
dotenv.config();
import jwt from 'jsonwebtoken'

export const generateJwtToken=(payload)=>{
    if(!payload){
        return new Error("There is no any paylaod");
    }
    try {
        //Add options as token expire time
        const options = {
            expiresIn: '1hr',
        } 
        return jwt.sign(payload, process.env.JWT_SECRET_KEY, options);
    } catch (error) {
        return new Error("There is no any paylaod");
    }
}