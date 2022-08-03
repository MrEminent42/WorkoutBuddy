import styled from '@emotion/styled'
import { AppBar, Typography } from '@mui/material'
import { Link } from 'react-router-dom'

export const Navbar = () => {
    return (
        <HeaderContainer elevation={0} >
            <Container>
                <NavbarLink to="/" >
                    <Typography variant='h3'>Workout Buddy</Typography>
                </NavbarLink>
            </Container>
        </HeaderContainer>
    )
}

const HeaderContainer = styled(AppBar)`
  /* background: #fff; */
`

const Container = styled.div`
    max-width: 1400px;
    margin: 0 auto;
    padding: 10px 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`

const NavbarLink = styled(Link)`
  color: #333;
  text-decoration: none;
`