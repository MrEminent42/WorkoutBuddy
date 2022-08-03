import { Workout } from "../../types/types";
import myAxios from "../axios"

export const getWorkouts = async () => {
    try {
        const response = await myAxios.get<Workout[]>('/workouts');
        // await new Promise(res => setTimeout(res, 1000));

        return response.data;
    } catch (error) {
        throw error
    }
}