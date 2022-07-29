import express, { Request, Response } from 'express';
import 'dotenv/config';
import mongoose from 'mongoose';

import workoutRoutes from './routes/workouts'

// express app
const app = express();

// middleware
app.use(express.json()) // access body

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

// routes
app.use('/api/workouts', workoutRoutes);

// connect to db
mongoose.connect(process.env.MONGO_URI || "")
    .then(() => {
        // listen for requests
        app.listen(process.env.PORT || 4000, () => {
            console.log(`Connected to db, server running on port: ${process.env.PORT || 4000}`)
        })
    })
    .catch((error) => console.error(error))
