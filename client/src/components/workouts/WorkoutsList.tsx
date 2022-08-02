import styled from '@emotion/styled'
import { Fade, Grid, Typography } from '@mui/material';
import { useQuery } from '@tanstack/react-query';
import { getWorkouts } from '../../api/workouts/getWorkouts';
import { WorkoutDetails, WorkoutDetailsFallback } from './WorkoutDetails'

export const WorkoutsList = () => {

    const workoutsQuery = useQuery(['workouts'], getWorkouts)

    if (workoutsQuery.isError) {
        return (
            <List item>
                <NoCardsInfo variant='h6'>Aw, snap! Something went wrong on our end. Please try again later.</NoCardsInfo>
            </List>
        )
    }

    if (workoutsQuery.isLoading) {
        return <WorkoutsListFallback />
    }

    // const workoutsQuery = {
    //     data: [
    //         {
    //             "_id": "62e7bb9d02de3c741d2731bb",
    //             "title": "hello3",
    //             "reps": 4,
    //             "load": 35,
    //             "createdAt": "2022-08-01T11:40:13.669Z",
    //             "updatedAt": "2022-08-01T11:40:13.669Z",
    //             "__v": 0
    //         }
    //     ]
    // }

    return (
        <List item xs={4} md={8}>
            {workoutsQuery.data.length ? workoutsQuery.data.map((workout) =>
                <WorkoutDetails workout={workout} key={workout._id + "hi "} />
            ) : (
                <NoCardsInfo variant='h6' >No workouts yet!</NoCardsInfo>
            )}
        </List>
    )
}

export const WorkoutsListFallback = () => {
    return (
        <Fade
            in={true}
            style={{
                transitionDelay: '800ms',
            }}

        >
            <List item xs={4} md={8}>
                <WorkoutDetailsFallback />
                <WorkoutDetailsFallback />
                <WorkoutDetailsFallback />
            </List>

        </Fade>

    )
}

const List = styled(Grid)` 
    /* width: 30vw; */
`

List.defaultProps = {
    xs: 4,
    md: 8,
}

const NoCardsInfo = styled(Typography)`
    text-align: center;
`
