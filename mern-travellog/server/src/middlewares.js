const notFound = (req,res, next) => {                                        // The Page not found middleware. Typically should be the very last middleware in the file.
    const error = new Error(`Not Found - ${req.originalUrl}`)       // Create error and sends a didnt find this route.
    res.status(404)                                                 // Responds with a 404 status
    next(error)                                                     // then passes the error to the actual error handler (#01)
}

const errorHandler = (error, req, res, next) => {                                // (#01) General Error handler middlewares (all error handlers require the 4 parameters)
    const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
    res.status(statusCode)
    res.json({
        message: error.message,
        stack: process.env.NODE_ENV === "production" ? ":)" : error.stack,    // Sends error stack (potentially bad for production and people can see the project structure)
    })

}

module.exports = {
    notFound,
    errorHandler
}