import styled from 'styled-components';
import './App.css';
import { AppRoutes } from './routes';

const Main = styled.main`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

function App() {
  return (
    <Main>
      <AppRoutes />
    </Main>
  );
}

export default App;
