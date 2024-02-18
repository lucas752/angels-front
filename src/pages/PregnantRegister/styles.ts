import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 100dvh;
`;

export const Contente = styled.div`
  width: 70%;
  height: 90%;
  background: rgba(177, 72, 138, 0.2);
  align-self: center;
  justify-self: center;
`;

export const TopContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
`;

export const FormContainer = styled.section`
  div {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 1rem;
`;
