import styled from 'styled-components';

export const FollowUpCardContainer = styled.div`
  margin-left: 20px;
  margin-right: 20px;
  min-height: 10rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: #d9d9d9;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.11), 0 2px 2px rgba(0, 0, 0, 0.11),
    0 4px 4px rgba(0, 0, 0, 0.11), 0 6px 8px rgba(0, 0, 0, 0.11),
    0 8px 16px rgba(0, 0, 0, 0.11);
  border-radius: 36px;
  padding: 2rem;
`;

export const ColumnCardContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CardInfoTitle = styled.span`
  color: #7c3a66;
  font-weight: 700;
`;

export const CardInfoContent = styled.span`
  font-weight: 600;
`;

export const CardInfoContainer = styled.span`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;
