import styled from '@emotion/styled';
import { Button, Card, Grid, TextField, Typography } from '@mui/material';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { FormEvent, useState } from 'react'
import myAxios from '../../api/axios';
import { Workout } from '../../types/types';

export const WorkoutForm = () => {
    const [title, setTitle] = useState('');
    const [load, setLoad] = useState('');
    const [reps, setReps] = useState('');
    const [date, setDate] = useState(new Date().toISOString().slice(0, 10));
    const [error, setError] = useState('');

    const queryClient = useQueryClient();
    const addWorkoutMutation = useMutation(async () => {

        const newWorkout = { title, load, reps };
        return myAxios.post<Workout>('/workouts', newWorkout)
            .then(async (response) => {
                setError('')

                console.debug("New workout added!");
                console.debug(response)

                setTitle('')
                setLoad('')
                setReps('')

                queryClient.invalidateQueries(['workouts'])

            })
    })

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();


        addWorkoutMutation.mutate();


        // .catch((error: AxiosError) => {
        //     setError(error.message)
        //     console.debug(error)
        //     return;
        // })


    }

    return (
        <FormContainer item xs={4}>
            {/* {addWorkoutMutation.isSuccess ? <div onClick={() => addWorkoutMutation.reset()}>Todo added!</div> : null} */}

            <FormCard
                // elevation={2}
                variant="outlined">

                <form onSubmit={handleSubmit}>
                    {error !== "" && ("ERROR: " + error)}
                    <Typography variant="h6">Add a New Workout</Typography>
                    <InputField
                        type="text"
                        label="Exercise Title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                    <InputField
                        type="number"
                        label="Exercise Load"
                        value={load}
                        onChange={(e) => setLoad(e.target.value)}
                    />
                    <InputField
                        type="number"
                        label="Exercise Reps"
                        value={reps}
                        onChange={(e) => setReps(e.target.value)}
                    />
                    {/* <InputField
                        type="date"
                        label="Exercise Reps"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                    /> */}

                    <Button type="submit">Add Workout</Button>
                </form>
            </FormCard>

        </FormContainer>
    )
}

const FormContainer = styled(Grid)`
    margin-top: 10px;
`

const FormCard = styled(Card)`
    background-color: white;
    /* border-radius: 20px; */
    padding: 20px;
    /* box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px; */
`

const InputField = styled(TextField)`
    /* width: 300px; */
    /* border: 1px solid grey; */
    border-radius: 10px;
    width: 100%;
    margin: 10px 0;
`