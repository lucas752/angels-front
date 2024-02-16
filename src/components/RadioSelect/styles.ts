import { Radio } from 'antd';
import styled from 'styled-components';

export const Container = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 12px;
`;

export const Label = styled.label`
  display: flex;
  justify-content: space-between;
  align-self: start;
  font-weight: 600;
  color: var(--red-500);
`;

export const RadioArea = styled(Radio)``;
