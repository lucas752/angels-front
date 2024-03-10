import { Button } from 'antd';
import styled from 'styled-components';

export const Container = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100dvh;
`;

export const Content = styled.div`
  display: flex;
  width: 80%;
  background-color: rgba(177, 72, 138, 0.2);
  border-radius: 10px;
  align-items: center;
  flex-direction: column;
  @media (min-width: 426px) and (max-width: 960px) {
    overflow-y: scroll;
  }
  @media (min-width: 1024px) {
    overflow-y: hidden;
  }
`;

export const LogoContainer = styled.div`
  margin: 1rem;
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 1rem;
  padding-right: 1rem;
  align-items: end;
  justify-content: center;
  width: 100%;
`;

export const FirstRow = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  /* justify-content: space-evenly; */
  align-items: center;
  flex-wrap: nowrap;

  @media (min-width: 426px) and (max-width: 960px) {
    flex-direction: row;
    flex-wrap: wrap;
  }
  @media (min-width: 1024px) {
    flex-direction: row;
  }
`;

export const btn = styled(Button)`
  margin-top: 1rem;
  width: 20%;
  background-color: #b1488a;
  color: #ffffff;
  margin: 1rem;
  @media (min-width: 426px) and (max-width: 768px) {
    width: auto;
  }
`;
