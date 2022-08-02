import styled from "@emotion/styled";
import { Grid } from "@mui/material";
import { WorkoutForm } from "../components/workouts/WorkoutForm";
import { WorkoutsList } from "../components/workouts/WorkoutsList";
export const Home = () => {


    return (
        <HomeContainer container spacing={2} columns={{ xs: 4, sm: 8, md: 12 }}>
            <WorkoutsList />
            <WorkoutForm />
        </HomeContainer>

    )
}

const HomeContainer = styled(Grid)`
    /* display: flex; */
    /* background-color: #f3c0c0; */
`