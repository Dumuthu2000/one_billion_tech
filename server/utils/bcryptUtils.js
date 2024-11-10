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
        const hashedValue = await bcrypt.hash(value, saltRounds);
        return { hashedValue };   
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
        const verifiedValue = await bcrypt.compare(value, hashedValue);

        return { verifiedValue };
    } catch (error) {
        return new Error('Error while hashing verifying: ' + error.message);
    }
}
