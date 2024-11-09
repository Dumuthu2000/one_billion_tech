import express from 'express';
import { loginUser, registerUser } from '../controllers/authController.js';

const router = express.Router();

//Route to user registration
router.post('/register',registerUser);
//Route to user login
router.post('/login',loginUser);

export default router;