const asyncHandler = (fn) => async(req, res, next) =>{
    try {
        await fn(req, res, next)
        
    } catch (error) {
        res.status(500).json({
            success: false,
            msg: err.message
        })
    }
}

export {asyncHandler}