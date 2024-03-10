import styled from 'styled-components';
import './App.css';
import { AppRoutes } from './routes';
import { DataProvider } from './config/Data/DataProvider';

const Main = styled.main`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

function App() {
  return (
    <Main>
      <DataProvider>
        <AppRoutes />
      </DataProvider>
    </Main>
  );
}

export default App;
