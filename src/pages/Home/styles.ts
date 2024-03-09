import styled from 'styled-components';

export const Container = styled.div`
background-image: linear-gradient(to bottom right, #F1488A, #B1488A);
  height: 100vh;
  width: 100vw;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: #fff;
  font-family: 'Inter', sans-serif;
  padding: 0 12rem; 

  h1 {
    font-weight: SemiBold;
    font-size: 90px;
    margin-top: 7rem;
    margin-bottom: 10px;
  }

  p {
    font-size: 1.5rem;
    margin: 0 100px 40px 100px; 
  }
`;