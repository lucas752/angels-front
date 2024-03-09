import styled from 'styled-components';

export const PregnancyCardContainer = styled.div`
  min-width: 24%;
  min-height: 23rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: #d9d9d9;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.11), 0 2px 2px rgba(0, 0, 0, 0.11),
    0 4px 4px rgba(0, 0, 0, 0.11), 0 6px 8px rgba(0, 0, 0, 0.11),
    0 8px 16px rgba(0, 0, 0, 0.11);
  border-radius: 36px;
  padding: 0px 1.5% 1.5% 1.5%;

  @media (max-width: 1000px) {
    width: 17rem;
    height: 20rem;
  }
`;

export const RiskLine = styled.div`
  background-color: #b5b5b5;
  height: 6px;
  width: 80%;
  border-radius: 0px 0px 100% 100%;
`;

export const RedRiskLine = styled.div`
  background-color: red;
  height: 6px;
  width: 80%;
  border-radius: 0px 0px 100% 100%;
`;

export const LineContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const ImageContainer = styled.section`
  display: flex;
  justify-content: center;
`;

export const PregnancyInfoContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const PregnancyInfoTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const PregnancyInfoTitle = styled.span`
  color: #7c3a66;
  font-weight: 700;
`;

export const PregnancyInfoContent = styled.span`
  font-weight: 600;
`;

export const PregnancyButtonsContainer = styled.section`
  display: flex;
  justify-content: flex-end;
  gap: 10px;
`;

export const PregnancyCardButton = styled.button`
  border: none;
  cursor: pointer;
  background-color: #d9d9d9;
`;
