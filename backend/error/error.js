class ErrorHandler extends Error{
    constructor(message, statusCode){
        super(message)
        this.statusCode = statusCode;
    }
}

// for running this error handler,  we need to make a middleware

export const errorMiddleware = (err, req, res, next)=>{
    err.message == err.message || "Internal Server Error"
    err.statusCodetatusCode == err.statusCode || 500
    
    return res.status(err.statusCode).json({
        success:false,
        message:err.message
    })
}

export default ErrorHandler;