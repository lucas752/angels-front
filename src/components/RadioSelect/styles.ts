import { Radio } from 'antd';
import styled from 'styled-components';

export const Container = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 12px;
  width: 100%;
  div {
    align-self: flex-start !important;
    justify-self: start !important;
    width: max-content !important;
  }
`;

export const Label = styled.label`
  display: flex;
  justify-content: space-between;
  align-self: start;
  font-weight: 600;
  color: var(--red-500);
`;

export const RadioArea = styled(Radio)`
  .ant-radio-checked .ant-radio-inner {
    border-color: var(--red-500) !important ;
    background-color: var(--red-500) !important;
  }

  .ant-radio-checked .ant-radio-inner:after {
    border-color: var(--red-500) !important ;
  }

  .ant-radio:hover .ant-radio-inner {
    border-color: var(--red-500) !important;
  }
`;
