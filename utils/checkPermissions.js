import { UnAuthorizedError } from "../errors";

const checkPermissions = (requestUser, resourceUserId) => {
    if (requestUser.role === 'admin') return;
    if (requestUser.userId === resourceUserId.toString()) return;

    throw new UnAuthorizedError(
        'Not authorized to access this route'
    )
}


export default checkPermissions