import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 170px;
  padding-right: 190px;
  padding-top: 50px;
  gap: 28px;
`;

export const Header = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const PregnantInfoContainer = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
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

export const CardsContainer = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 20px;
`;
