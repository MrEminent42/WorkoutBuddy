import styled from '@emotion/styled';
import { Button, Card, Grid, TextField, Typography } from '@mui/material';
import { AxiosError } from 'axios';
import { useAtom } from 'jotai';
import { FormEvent, useState } from 'react'
import myAxios from '../../api/axios';
import { refreshWorkoutsAtom, workoutsAtom } from '../../jotai/workouts/workoutsAtom';
import { Workout } from '../../types/types';

export const WorkoutForm = () => {
    const [title, setTitle] = useState('');
    const [load, setLoad] = useState('');
    const [reps, setReps] = useState('');
    const [error, setError] = useState('');

    // const [fetchWorkouts, refreshWorkouts] = useAtom(workoutsAtom);
    const [, refreshWorkouts] = useAtom(refreshWorkoutsAtom)

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const workout = { title, load, reps };

        myAxios.post<Workout>('/workouts', workout)
            .then(async (response) => {
                setError('')

                console.debug("New workout added!");
                console.debug(response)

                setTitle('')
                setLoad('')
                setReps('')

                refreshWorkouts();

            })
            .catch((error: AxiosError) => {
                setError(error.message)
                console.debug(error)
                return;
            })


    }

    return (
        <FormContainer item xs={4}>
            <FormCard
                // elevation={2}
                variant="outlined">

                <form onSubmit={handleSubmit}>
                    {error !== "" && ("ERROR: " + error)}
                    <Typography variant="h6">Add a New Workout</Typography>
                    {/* <InputLabel>Exercise Title</InputLabel> */}
                    <InputField
                        type="text"
                        label="Exercise Title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                    {/* <InputLabel>Exercise Load</InputLabel> */}
                    <InputField
                        type="number"
                        label="Exercise Load"
                        value={load}
                        onChange={(e) => setLoad(e.target.value)}
                    />
                    {/* <InputLabel>Exercise Reps</InputLabel> */}
                    <InputField
                        type="number"
                        label="Exercise Reps"
                        value={reps}
                        onChange={(e) => setReps(e.target.value)}
                    />

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

const InputTitle = styled.div`
    font-size: 1.3rem;
    color: grey;
`

const InputLabel = styled.label`
    /* color: red; */
`

const InputField = styled(TextField)`
    /* width: 300px; */
    /* border: 1px solid grey; */
    border-radius: 10px;
    width: 100%;
    margin: 10px 0;
`