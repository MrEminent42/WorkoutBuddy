import { Request, response, Response } from 'express';
import Workout from '../models/WorkoutModel';
import mongoose from 'mongoose';

// get all workouts
const getWorkouts = async (req: Request, res: Response) => {
    try {
        const workouts = await Workout.find().sort({ createdAt: -1 });
        res.status(200).json(workouts);
    } catch (error) {
        res.status(400).json({ error: (error as Error).message });
    }
}

// get single workout
const getWorkout = async (req: Request, res: Response) => {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).json({ error: 'No such workout.' })
    try {
        const workout = await Workout.findById(id);

        if (!workout) return response.status(404).json({ error: "No such workout." });
        return res.status(200).json(workout);
    } catch (error) {
        res.status(400).json({ error: (error as Error).message });
    }
}

// create new workout
const createWorkout = async (req: Request, res: Response) => {
    const { title, load, reps } = req.body;
    try {
        const workout = await Workout.create({ title, load, reps });
        res.status(200).json(workout);
    } catch (error) {
        res.status(400).json({ error: (error as Error).message })
    }
}

// delete workout

const deleteWorkout = async (req: Request, res: Response) => {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).json({ error: "No such workout." });
    try {
        const workout = await Workout.findOneAndDelete({ _id: id });
        if (!workout) return res.status(404).json({ error: "No such workout." });
        return res.status(200).json(workout);
    } catch (error) {
        res.status(400).json({ error: (error as Error).message })
    }
}


// update workout
const updateWorkout = async (req: Request, res: Response) => {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).json({ error: "No such workout." });
    try {
        const oldWorkout = await Workout.findOneAndUpdate({ _id: id }, { ...req.body })

        if (!oldWorkout) return res.status(404).json({ error: "No such workout." });
        return res.status(200).json(oldWorkout);
    } catch (error) {
        res.status(400).json({ error: (error as Error).message })
    }
}

export { getWorkout, getWorkouts, createWorkout, deleteWorkout, updateWorkout }