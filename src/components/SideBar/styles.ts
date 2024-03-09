import styled from 'styled-components';

export const SidebarContainer = styled.div`
  height: 613px;
  width: 138px;
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
  color: #B1488A;
  font-weight: bold;
  margin-top: 10px;
  margin-bottom: 20px;
  text-align: center;
`;
