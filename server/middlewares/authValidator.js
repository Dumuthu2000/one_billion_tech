import { body } from "express-validator";

//Validation when register
export const validateUser = [
    body('username')
        .notEmpty().withMessage("Username is required"),

    body('email')
        .notEmpty().withMessage('Email is required')
        .isEmail().withMessage('Please enter valid email address'),
    
    body('password')
        .notEmpty().withMessage('Password is required')
        .isLength({min:5, max:10}).withMessage('Password must be at least 5 characters long')
];

// //Validation when login
// export const validateLoginUser = [
//     body('email')
//         .isEmail()
//         .withMessage('Please enter a valid email address'),

//     body('password')
//         .notEmpty()
//         .withMessage('Password is required')
// ];