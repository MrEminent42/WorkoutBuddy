import { Workout } from "../../types/types";
import myAxios from "../axios"

export const getWorkouts = async () => {
    try {
        const response = await myAxios.get<Workout[]>('/workouts');

        return response.data;
    } catch (error) {
        throw error
    }
}