import styled from '@emotion/styled'
import { Typography } from '@mui/material'
import React from 'react'
import { Workout } from '../../types/types'

export const WorkoutDetails = (props: WorkoutProps) => {
    return (
        <CardContainer>
            <Title color='primary'>{props.workout.title}</Title>
            <Info>
                Load: {props.workout.load}, Reps: {props.workout.reps} <br />
                Logged: {new Date(props.workout.createdAt).toLocaleDateString()}
            </Info>
        </CardContainer>
    )
}

interface WorkoutProps {
    workout: Workout;
}

const CardContainer = styled.div`
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