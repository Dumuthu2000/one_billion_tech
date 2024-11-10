import crypto from 'crypto';
import { hashingData, verifyHashingData } from '../utils/bcryptUtils.js';

export const generateResetToken=async()=>{
    const resetToken = crypto.randomBytes(30).toString('hex'); //Generate new reset token
    const hashedToken = await hashingData(resetToken); //Making hash generated token from hashingUtils

    return { resetToken, hashedToken };
}

export const verifyResetToken=async(resetToken, hashedResetToken)=>{
    const { verifiedResetToken } = await verifyHashingData(resetToken, hashedResetToken);

    return { verifiedResetToken };
}