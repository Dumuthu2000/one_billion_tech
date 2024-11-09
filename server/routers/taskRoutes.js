import express from 'express'
import { createTask, deleteTask, fetchTasks, updateTask } from '../controllers/taskController.js';
import { validateTask } from '../middlewares/taskValidator.js';
import { verifyToken } from '../middlewares/authMiddleware.js';

const router = express.Router();

//New task creating route api
router.post('/tasks', verifyToken, validateTask, createTask);
//Fetching all tasks where logged-in user route api
router.get('/tasks', verifyToken, fetchTasks);
//Update a task where logged-in user route api
router.patch('/tasks/:id', verifyToken, validateTask, updateTask);
//Delete a task where logged-in user route api
router.delete('/tasks/:id', verifyToken, deleteTask);

export default router;