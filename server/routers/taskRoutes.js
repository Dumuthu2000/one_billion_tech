import express from 'express'
import { createTask } from '../controllers/taskController.js';
import { validateTask } from '../middlewares/taskValidator.js';
import { verifyToken } from '../middlewares/authMiddleware.js';

const router = express.Router();

router.post('/create-task', verifyToken, validateTask, createTask);

export default router;