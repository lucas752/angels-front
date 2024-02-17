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
