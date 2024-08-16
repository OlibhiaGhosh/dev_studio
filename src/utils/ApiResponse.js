class ApiResponse{
    constructor(
        statuscode,
        message = "success",
        data
    ){
        this.statuscode=statuscode,
        this.message=message,
        this.data=data
        this.success = statusCode < 400
    }
}

export { ApiResponse }