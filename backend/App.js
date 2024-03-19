import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import { dbConnection } from './database/dbConnection.js'
import { errorMiddleware } from './error/error.js'
import reservationRouter from './routes/reservationRoute.js'

const app = express()
dotenv.config({path:"./config/config.env"})

app.use(cors({
    origin: [process.env.FRONTEND_URL],         // This is used to connect the url of the frontend to the backend. We can use as many frontends as we want using a comma,
    methods : ["POST"],
    credentials : true
}))

app.use(express.json())         // App.use() is used to use the function as a middleware
app.use('/api/reservation',reservationRouter)

dbConnection();

app.use(errorMiddleware)

export default app