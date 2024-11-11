import Task from "../models/Task.js";
import { validationResult } from 'express-validator';

//Create new task functionality
export const createTask=async(req, res, next)=>{
    //Check validations
    const errors = validationResult(req);

    if(!errors.isEmpty()){
        return res.status(400).json({
            success: false,
            message: 'Validation failed',
            errors: errors.array()
        });
    }

    // Ensure req.user is available and contains the id
    if (!req.user || !req.user.id) {
        return res.status(400).json({
            success: false,
            message: 'User ID is missing or invalid.',
        });
    }
    try {
        const task = await Task.create({...req.body, userId: req.user.id});
        
        //return success created task
        return res.status(201).json({
            success: true,
            message: 'Task created successfully',
            data: task
        });
    } catch (error) {
        next(error);
    }
}

//Fetch tasks created by logged-in user functionality
export const fetchTasks=async(req, res)=>{
    const userId = req.user.id; // Accessing user ID from the JWT token

    try {
        // Fetch tasks associated with the logged-in user 
        const tasks = await Task.findAll({where: {userId}});

        // Check if no tasks are found
        if (tasks.length === 0) {
            return res.status(404).json({
                status: false,
                message: 'No tasks available for this user.',
            });
        };

        return res.status(200).json({
            status: true,
            message: 'Tasks fetched successfully.',
            tasks, 
        });
    } catch (error) {
       next(error);
    }
}

//Update task functionality
export const updateTask=async(req, res)=>{
    const {id} = req.params; // Get selected task id from url
    const userId = req.user.id; // Accessing user ID from the JWT token

    const {title, description, dueDate, dueTime, isComplete} = req.body;
    // const {createdAt, updatedAt, ...taskUpdates} = req.body;

    const errors = validationResult(req);
    
    if(!errors.isEmpty()){
        return res.status(400).json({
            success: false,
            message: 'Validation failed',
            errors: errors.array()
        });
    }

    // Ensure req.user is available and contains the id
    if (!req.user || !req.user.id) {
        return res.status(400).json({
            success: false,
            message: 'User ID is missing or invalid.',
        });
    }

    try {
        const [updatedTaskCount] = await Task.update({
            title, 
            description, 
            dueDate, 
            dueTime, 
            isComplete},{
            where: {
                taskId: id, 
                userId 
            }
        });
         //Check if any rows were updated
        if(updatedTaskCount === 0){
            return res.status(404).json({
                status: false,
                message: "Task not found or no changes made.",
            });
        }

        return res.status(200).json({
            status: true,
            message: "Task updated successfully.",
        });
    } catch (error) {
        next(error);
    }
}

//Delete task functionality
export const deleteTask=async(req, res)=>{
    const{ id } = req.params; // Get the task ID from URL params
    const userId = req.user.id; // Access user ID from the JWT token

    try {
       const deletedTask = await Task.destroy({where: {
        taskId: id, 
        userId
       }});

       // Check if the task was found and deleted
       if(deletedTask === 0){
        return res.status(404).json({
            success: false,
            message: "Task not found or you don't have permission to delete it.",
        });
       }

       return res.status(200).json({
        status: true,
        message: "Task deleted successfully",
       });
    } catch (error) {
        next(error); 
    }
}

//Get selected task for edit
export const editTask=async(req, res, next)=>{
    const{ id } = req.params; // Get the task ID from URL params
    const userId = req.user.id; // Access user ID from the JWT token

    try {
       const task = await Task.findOne({where: {
        taskId: id, 
        userId
       }});

       // Check if the task was found and deleted
       if(!task){
        return res.status(404).json({
            success: false,
            message: "Task is not found.",
            task,
        });
       }

       return res.status(200).json({
        status: 'success',
        message: "Task is fetched successfully",
       });
    } catch (error) {
        next(error); 
    }
}