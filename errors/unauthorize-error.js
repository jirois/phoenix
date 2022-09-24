import CustomAPIError from "./custom-error.js"
import { StatusCodes } from 'http-status-codes'
class UnAuthorizedError extends CustomAPIError {
    constructor(message) {
        super(message)
        this.stausCode = StatusCodes.BAD_REQUEST
    }
}

export default UnAuthorizedError