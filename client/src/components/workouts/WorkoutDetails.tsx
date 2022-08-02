import styled from '@emotion/styled'
import { IconButton, Skeleton, Typography } from '@mui/material'
import { Workout } from '../../types/types'
import DeleteIcon from '@mui/icons-material/Delete';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import myAxios from '../../api/axios';

export const WorkoutDetails = (props: WorkoutProps) => {
    const queryClient = useQueryClient();
    const deleteWorkoutMutation = useMutation((id: string) => {
        const res = myAxios.delete('/workouts/' + id).then(() => {
            queryClient.invalidateQueries(['workouts'])
        })
        return res;
    })



    return (
        <CardContainer>
            <Title color='primary'>{props.workout.title}</Title>
            <Info>
                Load: {props.workout.load}, Reps: {props.workout.reps} <br />
                Logged: {new Date(props.workout.createdAt).toLocaleDateString()}
            </Info>



            <DeleteButton
                size='small'
                onClick={() => {
                    deleteWorkoutMutation.mutate(props.workout._id)
                }}
            >
                <DeleteIcon />
            </DeleteButton>
        </CardContainer>
    )
}

export const WorkoutDetailsFallback = () => {
    return (
        <CardContainer>
            <Title color='primary'>
                <Skeleton variant="text" />
            </Title>

            <Info>
                <Skeleton variant="text" />
                <Skeleton variant="text" />
            </Info>
        </CardContainer>
    )
}

interface WorkoutProps {
    workout: Workout;
}

const CardContainer = styled.div`
    position: relative;
    background-color: white;
    border-radius: 10px;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    padding: 20px;
    margin: 10px 0;
`

const Title = styled(Typography)`
    font-weight: 600;
    font-size: 1.3rem;
    /* color: steelblue; */
`

const Info = styled(Typography)`
    
`

const DeleteButton = styled(IconButton)`
    /* background-color: red; */
    position: absolute;
    right: 8px;
    top: 8px;
    /* width: 30px;
    height: 30px; */
    display: flex;
    align-items: center;
    justify-content: center;
`
