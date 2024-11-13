import dotenv from 'dotenv';
dotenv.config();
import { transporter } from '../config/nodemailerConfig.js';

export const sendPasswordResetEmail = async (email, resetLink) => {
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: email,
    subject: 'Password reset request',
    text: `You requested a password reset. Click this link to reset your password: ${resetLink}`
  };

  //Sending options to the transporter
  await transporter.sendMail(mailOptions);
};
