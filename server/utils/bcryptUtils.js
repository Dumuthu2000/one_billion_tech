import dotenv from 'dotenv'
dotenv.config();
import bcrypt from 'bcryptjs';

export const hashingData=async(value)=>{
    //Getting salt rounds from .env
    const saltRounds = parseInt(process.env.HASHING_PASSWORD_SALTROUNDS);

    //Check value is there for hashing
    if(!value){
        return new Error('Value is required for hashing');
    }
    try {
        //hashing passing value
        return await bcrypt.hash(value, saltRounds); 
          
    } catch (error) {
        return new Error('Error while hashing: ' + error.message);
    }
};

export const verifyHashingData=async(value, hashedValue)=>{
    //Check if both value and hashed value are there for verifying
    if(!value && !hashedValue){
        return new Error("Value is not there");
    }
    try {
        return await bcrypt.compare(value, hashedValue);
    } catch (error) {
        return new Error('Error while hashing verifying: ' + error.message);
    }
}
