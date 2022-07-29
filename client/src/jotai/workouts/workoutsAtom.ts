import { atom } from "jotai";
import { getWorkouts } from "../../api/workouts/getWorkouts";
import { Workout } from "../../types/types";
import { atomWithRefresh } from "../atomCreators/atomWithRefresh";

const workoutsAtom = atomWithRefresh(
    async (get) => {


        const delay = (ms: number) => new Promise(res => setTimeout(res, ms));
        await delay(1000)


        return await getWorkouts().catch((error) => console.debug(error));
    }
)

const refreshWorkoutsAtom = atom(
    null,
    (_, set) => {
        set(workoutsAtom)
    }
)


export { workoutsAtom, refreshWorkoutsAtom }