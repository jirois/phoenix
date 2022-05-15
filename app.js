import 'express-async-errors'
import dotenv from 'dotenv'
dotenv.config()



import express from 'express'
const app = express()

import cookieParser from 'cookie-parser'
import rateLimiter from 'express-rate-limit'
import helmet from 'helmet'
import xss from 'xss-clean'
import cors from 'cors'
import mongoSanitize from 'express-mongo-sanitize'

// database
import connectDB from './db/connect.js'

// router
import authRouter from './routes/authRouter.js';
import userRouter from './routes/userRouter.js';

// middleware

import errorHandlerMiddleware from './middlewares/error-handler.js';
import notFoundMiddleware from './middlewares/not-found.js'


app.set('trust proxy', 1);
app.use(
    rateLimiter({
        windowMs: 15 * 60 * 1000,
        max: 60,
    })
);
app.use(helmet());
app.use(cors());
app.use(xss());
app.use(mongoSanitize());
app.use(cookieParser(process.env.JWT_SECRET));

app.use('/api/v1/auth', authRouter)
app.use('/api/v1/users', userRouter)


app.get('/', (req, res) => {
    res.send(`<h1> Welcome Here </h1>`)
})


app.use(notFoundMiddleware)
app.use(errorHandlerMiddleware)

const port = process.env.PORT || 5000

const start = async () => {
    try {
        // connectDB(process.env.MONGO_URI)
        app.listen(port, () => {
            console.log(`Port listening at port: ${port}

http://localhost:${port}
         `);
        });
    } catch (error) {
        console.log(error.message);
    }
}

start()