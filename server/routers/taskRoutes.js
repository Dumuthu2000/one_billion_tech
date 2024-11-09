import express from 'express'
import { createTask, fetchTasks, updateTask } from '../controllers/taskController.js';
import { validateTask } from '../middlewares/taskValidator.js';
import { verifyToken } from '../middlewares/authMiddleware.js';

const router = express.Router();

//Create new task 
router.post('/create-task', verifyToken, validateTask, createTask);
//Fetching all tasks where logged-in user 
router.get('/tasks', verifyToken, fetchTasks);
//Update a task where logged-in user 
router.patch('/update-task/:id', verifyToken, validateTask, updateTask);

export default router;