import { atom } from "jotai";
import { getWorkouts } from "../../api/workouts/getWorkouts";
import { Workout } from "../../types/types";
import { atomWithRefresh } from "../atomCreators/atomWithRefresh";

const databaseWorkoutsAtom = atomWithRefresh(
    async (get) => {


        const delay = (ms: number) => new Promise(res => setTimeout(res, ms));
        // await delay(500)


        return await getWorkouts().catch((error) => console.debug(error));
    }
)

const workoutsAtom = atom<Workout[] | null>(null)

export { workoutsAtom, databaseWorkoutsAtom }