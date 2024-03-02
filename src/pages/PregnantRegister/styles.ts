import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 100dvh;
`;

export const Contente = styled.div`
  width: 80%;
  height: 90%;
  background: rgba(177, 72, 138, 0.2);
  align-self: center;
  justify-self: center;
  overflow-y: scroll;
  @media (min-width: 426px) and (max-width: 768px) {
    overflow-y: scroll;
  }
  @media (min-width: 1024px) {
    overflow-y: hidden;
  }
`;

export const TopContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
`;

export const FormContainer = styled.section`
  width: 100%;
`;

export const InputRow = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  flex-wrap: nowrap;
  @media (min-width: 426px) and (max-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
  }
  @media (min-width: 1024px) {
    flex-direction: row;
  }
`;

export const ButtonContainer = styled.div<{ $progress?: boolean }>`
  display: flex;
  justify-content: ${(props) =>
    props.$progress ? 'space-between' : 'flex-end'};
  padding: 1rem;
`;
