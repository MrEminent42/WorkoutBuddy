import styled from '@emotion/styled';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Home } from './pages/Home';


function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />

        <PageContainer>
          <Routes>
            <Route
              path="/"
              element={<Home />}
            />
          </Routes>
        </PageContainer>
      </BrowserRouter>
    </>
  );
}

export default App;

const PageContainer = styled.div`
  max-width: 1400px;
  padding: 20px;
  margin: 0 auto;
`