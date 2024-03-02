import { Button } from 'antd';
import styled from 'styled-components';

export const Container = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100dvh;
`;

export const Content = styled.div`
  width: 60%;
  height: 80%;
  display: flex;
  background-color: rgba(177, 72, 138, 0.2);
  align-items: center;
  flex-direction: column;
`;

export const LogoContainer = styled.div`
  margin: 1rem;
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1rem;
  align-items: end;
`;

export const FirstRow = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
`;

export const btn = styled(Button)`
  margin-top: 1rem;
  width: 20%;
  background-color: #b1488a;
  color: #ffffff;
`;

export const PressureDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 12px;
  padding: 1rem;

  label {
    color: var(--red-500);
    font-weight: 600;
    justify-content: space-between;
  }
`;

export const InputAreaP = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  .ant-input-number {
    border-radius: 1rem !important;
    border: 2px var(--gray-100) solid;
  }

  p {
    font-size: 30px;
    padding-left: 0.7rem;
    padding-right: 0.7rem;
    color: var(--red-500);
  }
`;
