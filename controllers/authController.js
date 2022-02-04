import { StatusCodes } from "http-status-codes";
import Token from "../models/Token";
import User from "../models/User";
import {
    attackCookiesToResponse,
    createTokenUser,
    sendVerificationEmail,
    sendResetPasswordEmail,
    createHash
} from '../utils/index.js'

import { randomBytes } from 'crypto'
import { BadRequestError, UnAuthenticatedError } from "../errors";


const register = async (req, res) => {
    const { email, name, password } = req.body

    const emailAlreadyExists = await User.findOne({ email })

    if (emailAlreadyExists) {
        throw new BadRequestError('Email already exist')
    }


    const isFirstAccount = (await User.countDocuments({})) === 0;
    const role = isFirstAccount ? 'admin' : 'user'


    verificationToken = randomBytes(40).toString('hex')


    const user = await User.create({
        name,
        email,
        password,
        role,
        verificationToken
    })

    const origin = 'http://localhost:7500'
    // const neworigin = 'https://react-node-netlify'

    await sendVerificationEmail({
        name: user.name,
        email: user.email,
        verificationToken: user.verificationToken,
        origin
    })

    res.status(StatusCodes.CREATED).json({
        msg: 'Success! Please check your email to verify account'
    })
}

const verifyEmail = async (req, res) => {
    const { verificationToken, email } = req.body
    const user = await User.findOne({ email })

    if (!user) {
        throw new UnAuthenticatedError('Verification failed')
    }

    if (user.verificationToken !== verificationToken) {
        throw new UnAuthenticatedError('Verification Failed')
    }

    (user.isVerified = true), (user.verified = Date.now())
    user.verificationToken = ''

    await user.save()
    res.status(StatusCodes.OK).json({ msg: 'Email Verified' })
}

const login = async (req, res) => {
    const { email, password } = req.body
    if (!email || !password) {
        throw new BadRequestError('Please provide email and password')
    }

    const user = await User.findOne({ email })

    if (!user) {
        throw new UnAuthenticatedError('Invalid Credentials')
    }

    const isPasswordCorrect = await user.comparePassword(password)

    if (!isPasswordCorrect) {
        throw new UnAuthenticatedError('Invalid Credentials')
    }
    if (!user.isVerified) {
        throw new UnAuthenticatedError('Please verify your email')
    }

    const tokenUser = createTokenUser(user)

    let refreshToken = ''

    const existingToken = await Token.findOne({ user: user._id })

    if (existingToken) {
        const { isValid } = existingToken
        if (!isValid) {
            throw new UnAuthenticatedError('Invalid Credentials')
        }
        refreshToken = existingToken.refreshToken
        attackCookiesToResponse({ res, user: tokenUser, refreshToken })
        res.status(StatusCodes.OK).json({ user: tokenUser })
        return
    }

    refreshToken = randomBytes(40).toString('hex')
    const userAgent = req.headers['user-agent']
    const ip = req.ip
    const userToken = { refreshToken, ip, userAgent, user: user._id }

    await Token.create(userToken)

    attackCookiesToResponse({ res, user: tokenUser, refreshToken })
    res.status(StatusCodes.OK).json({ user: tokenUser })
}

const logout = async (req, res) => {
    await Token.findOneAndDelete({ user: req.user.userId })
    res.cookie('accessToken', 'logout', {
        httpOnly: true,
        expires: new Date(Date.now())
    })
    res.cookie('refreshToken', 'logout', {
        httpOnly: true,
        expires: new Date(Date.now())
    })

    res.status(StatusCodes.OK).json({ msg: 'user logged out!' })
}

const forgotPassword = async (req, res) => {
    const { email } = req.body
    if (!email) {
        throw new BadRequestError('Please provide valid email')
    }
    const user = await User.findOne({ email })

    if (user) {
        const passwordToken = randomBytes(70).toString('hex')
        const origin = 'http://localhost:7500' // to be replace
        await sendResetPasswordEmail({
            name: user.name,
            email: user.email,
            token: passwordToken
        })
        const tenMinutes = 1000 * 60 * 10
        const passwordTokenExpirationDate = new Date(Date.now())

        user.passwordToken = createHash(passwordToken)
        user.passwordTokenExpirationDate = passwordTokenExpirationDate
        await user.save()
    }
}

const resetPassword = async (req, res) => {
    const { token, email, password } = req.body

    if (!token || !email || !password) {
        throw new BadRequestError('Please provide all values')
    }

    const user = await User.findOne({ email })

    if (user) {
        const currentDate = new Date()
        if (
            user.passwordToken === createHash(token) &&
            user.passwordTokenExpirationDate > currentDate
        ) {
            user.password = password
            user.passwordToken = null
            user.passwordTokenExpirationDate = null
            await user.save()
        }
    }
    res.send('reset password')
}

export {
    register,
    login,
    logout,
    verifyEmail,
    forgotPassword,
    resetPassword
}
