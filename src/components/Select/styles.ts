import { Select } from 'antd';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 12px;
  padding: 1rem;
`;

export const Label = styled.label`
  display: flex;
  justify-content: space-between;
  align-self: start;
  font-weight: 600;
  color: var(--red-500);
`;

export const SelectArea = styled(Select)`
  background: #fff;
  border-radius: 1rem !important;
  border: 2px var(--gray-100) solid !important;

  &:focus {
    border-color: var(--red-500) !important;
    outline: none;
  }
`;
