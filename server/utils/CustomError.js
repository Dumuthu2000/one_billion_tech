export default class CustomError extends Error {
    constructor(message, statusCode) {
        super(message);
        this.statusCode = statusCode;
        this.status = "error"; // Add a status property with a fixed value "error"
        this.isOperational = true;
        
        Error.captureStackTrace(this, this.constructor);
    }
}
