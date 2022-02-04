import { StatusCodes } from "http-status-codes";
import { BadRequestError, NotFoundError, UnAuthenticatedError } from "../errors";
import User from "../models/User";
import { attackCookiesToResponse, checkPermissions, createTokenUser } from "../utils";


const getAllUsers = async (req, res) => {
    console.log(req.user)
    const users = await User.find({ role: 'user' }).select('-password')
    res.status(StatusCodes.OK).json({ users })
}

const getSingleUser = async (req, res) => {
    const user = await User.findOne({ _id: req.params.id }).select('-password')
    if (!user) {
        throw new NotFoundError(`No user with id: ${req.params.id}`)
    }
    checkPermissions(req.user, user._id)
    res.status(StatusCodes.OK).json({ user })

}

const showCurrentUser = async (req, res) => {
    res.status(StatusCodes.OK).json({ user: req.user })
}
const updateUser = async (req, res) => {
    const { email, name } = req.body
    if (!email || !name) {
        throw new BadRequestError('Please provide all values')
    }

    const user = await User.findOne({ _id: req.user.userId })
    user.email = email
    user.name = name

    await user.save()

    const tokenUser = createTokenUser(user)
    attackCookiesToResponse({ res, user: tokenUser })
    res.status(StatusCodes.OK).json({ user: tokenUser })
}

const updateUserPassword = async (req, res) => {
    const { oldPassword, newPassword } = req.body
    if (!oldPassword || !newPassword) {
        throw new BadRequestError('Please provide both values')
    }
    const user = await User.findOne({ _id: req.user.userId })

    const isPasswordCorrect = await user.comparePassword(oldPassword)

    if (!isPasswordCorrect) {
        throw new UnAuthenticatedError('Invalid Credentials')
    }

    user.password = newPassword

    await user.save()
    res.status(StatusCodes.OK).json({ msg: 'Success! Password Uploaded' })
}

export {
    getAllUsers,
    getSingleUser,
    showCurrentUser,
    updateUser,
    updateUserPassword
}

