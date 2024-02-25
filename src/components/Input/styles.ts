import { Input } from 'antd';
import styled from 'styled-components';

export const Container = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 12px;
  width: 100%;
`;

export const InputArea = styled(Input)`
  border-radius: 1rem !important;
  border: 2px var(--gray-100) solid;

  &:focus {
    border-color: var(--red-500);
    outline: none;
  }

  &:hover {
    border-color: var(--red-500);
  }
`;

export const Label = styled.label`
  display: flex;
  justify-content: space-between;
  align-self: start;
  font-weight: 600;
  color: var(--red-500);
`;
