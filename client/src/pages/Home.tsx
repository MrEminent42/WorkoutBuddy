import styled from "@emotion/styled";
import { Grid } from "@mui/material";
import { useEffect, useState } from "react"
import myAxios from "../api/axios";
import { WorkoutDetails } from "../components/workouts/WorkoutDetails";
import { WorkoutForm } from "../components/workouts/WorkoutForm";
import { Workout } from "../types/types";

export const Home = () => {
    const [workouts, setWorkouts] = useState([{} as Workout]);

    useEffect(() => {
        setWorkouts([])
        const fetchWorkouts = async () => {
            const response = await myAxios.get<Workout[]>('/workouts');
            console.debug(response.data);
            setWorkouts(response.data);
        }

        fetchWorkouts()
    }, []) // dep = [] : fire once when rendered

    return (
        <FlexContainer container spacing={2} columns={{ xs: 4, sm: 8, md: 12 }}>
            <WorkoutsList item xs={4} md={8}>
                {workouts.length > 0 && workouts.map((workout) =>
                    <WorkoutDetails workout={workout} key={workout._id + "hi "} />
                )}
            </WorkoutsList>

            <WorkoutForm />
        </FlexContainer>

    )
}

const FlexContainer = styled(Grid)`
    /* display: flex; */
    /* background-color: #f3c0c0; */
`

const WorkoutsList = styled(Grid)` 
    /* width: 30vw; */
`