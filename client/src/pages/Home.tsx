import styled from "@emotion/styled";
import { Grid } from "@mui/material";
import { Suspense } from "react"
import { WorkoutForm } from "../components/workouts/WorkoutForm";
import { WorkoutsList, WorkoutsListFallback } from "../components/workouts/WorkoutsList";
export const Home = () => {


    return (
        <FlexContainer container spacing={2} columns={{ xs: 4, sm: 8, md: 12 }}>
            {/* <Suspense fallback={<WorkoutsListFallback />}> */}
            <WorkoutsList />
            <WorkoutForm />
            {/* </Suspense> */}

        </FlexContainer>

    )
}

const FlexContainer = styled(Grid)`
    /* display: flex; */
    /* background-color: #f3c0c0; */
`