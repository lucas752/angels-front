import { Modal } from 'antd';
import styled from 'styled-components';

export const SidebarContainer = styled.div`
  height: 80%;
  padding: 1rem;
  background-color: #ffffff;
  border-radius: 36px;
  border: 3px solid #7c3a66;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
`;

export const SidebarItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const TextItem = styled.p`
  font-size: 14px;
  color: #b1488a;
  font-weight: bold;
  margin-top: 10px;
  margin-bottom: 20px;
  text-align: center;
`;

export const CpfModal = styled(Modal)`
  label {
    font-size: 1rem;
    font-weight: bold;
  }

  .ant-btn-primary {
    background-color: var(--red-500) !important;
    border-radius: 20px;
  }

  .ant-btn-default {
    border-color: var(--red-500) !important;
    border-radius: 20px;
  }
`;
