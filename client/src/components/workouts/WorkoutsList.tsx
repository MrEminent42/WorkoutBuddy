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
