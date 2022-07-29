import styled from '@emotion/styled'
import { Grid } from '@mui/material';
import { useAtom } from 'jotai';
import { useEffect } from 'react';
import { workoutsAtom } from '../../jotai/workouts/workoutsAtom';
import { WorkoutDetails, WorkoutDetailsFallback } from './WorkoutDetails'

export const WorkoutsList = () => {
    const [workouts] = useAtom(workoutsAtom)

    useEffect(() => {
        // setWorkouts(fetchWorkouts!)
    }, [])


    return (
        <List item xs={4} md={8}>
            {workouts ? (
                workouts.length > 0 && workouts.map((workout) =>
                    <WorkoutDetails workout={workout} key={workout._id + "hi "} />
                )
            ) : (
                <WorkoutsListFallback />
            )}
        </List>
    )
}

export const WorkoutsListFallback = () => {
    return (
        <List item xs={4} md={8}>
            <WorkoutDetailsFallback />
            <WorkoutDetailsFallback />
            <WorkoutDetailsFallback />
            <WorkoutDetailsFallback />
            <WorkoutDetailsFallback />
            <WorkoutDetailsFallback />
            <WorkoutDetailsFallback />
            <WorkoutDetailsFallback />
        </List>
    )
}

const List = styled(Grid)` 
    /* width: 30vw; */
`


