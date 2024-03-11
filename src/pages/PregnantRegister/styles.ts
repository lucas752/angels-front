import { Progress } from 'antd';
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
  height: 80%;
  background: rgba(177, 72, 138, 0.2);
  align-self: center;
  justify-self: center;
  border-radius: 26px;
  overflow-y: scroll;
  @media (min-width: 426px) and (max-width: 768px) {
    overflow-y: scroll;
  }
  @media (min-width: 1024px) {
    overflow-y: hidden;
    height: auto;
  }
`;

export const TopContainer = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1rem;

  .arrow {
    display: flex;
    flex-direction: row;
    align-self: start;
    align-items: center;
    justify-content: space-between;
    width: 52%;
  }

  div {
    svg {
      cursor: pointer;
    }
  }
`;

export const ProgressBar = styled(Progress)`
  width: 100%;
  top: -24px;
  .ant-progress-inner {
    width: 100%;
  }

  .ant-progress-bg {
    background-color: var(--red-500);
  }
`;

export const FormContainer = styled.section``;

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
