import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 170px;
  padding-right: 190px;
  padding-top: 50px;
  gap: 28px;
  margin-bottom: 40px;

  @media (max-width: 1000px) {
    padding-right: 0;
  }
`;

export const Header = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 1000px) {
    flex-direction: column;
    gap: 10px;
    align-items: flex-start;
  }

  section {
    display: flex;
    align-items: center;
    gap: 10px;
  }
`;

export const PregnanciesText = styled.span`
  color: #7c3a66;
  font-family: 'Fira Sans Condensed', sans-serif;
  font-size: 25px;
  font-weight: 700;
`;

export const NewPregnancyButton = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #b1488a;
  border: none;
  cursor: pointer;
  border-radius: 40px;
  color: white;
  gap: 8px;
  padding: 10px;
  font-weight: 700;
`;

export const PregnantInfoContainer = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 1000px) {
    flex-direction: column;
    gap: 10px;
    justify-content: flex-start;
    align-items: flex-start;
  }
`;

export const PregnancyInfo = styled.section`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const LineContainer = styled.section`
  display: flex;
  justify-content: space-between;
`;

export const InfoPregnancyTitleText = styled.span`
  color: #b1488a;
  font-size: 15px;
  font-weight: 700;
  font-family: 'Fira Sans Condensed', sans-serif;
  margin-bottom: 7px;
`;

export const InfoPregnancyValueText = styled.span`
  font-size: 15px;
  font-weight: 700;
  font-family: 'Fira Sans Condensed', sans-serif;
`;

export const InfoPregnancyContainer = styled.section`
  display: flex;
  flex-direction: column;
`;
