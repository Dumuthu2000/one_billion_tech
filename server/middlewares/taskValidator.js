import { body } from 'express-validator';

export const validateTask = [
    body('title')
        .notEmpty()
        .withMessage('Title is required'),

    body('description')
        .notEmpty()
        .withMessage('Description is required'),

    body('dueDate')
        .optional()
        .isISO8601()
        .withMessage('Due date must be as (YYYY-MM-DD)'),

    body('dueTime')
        .optional()
        .matches(/^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/)
        .withMessage('Due time must be in HH:MM:SS format'),

    body('isCompleted')
        .optional()
        .isBoolean()
        .withMessage('isCompleted must be a boolean value')
];
