import styled from 'styled-components';

export const Container = styled.div`
  height: 100dvh;
  display: flex;
  flex-direction: column;
`;

export const NavBarContainer = styled.section`
  width: 8%;
  display: flex;
  justify-content: center;
  align-items: center;
  div {
    width: 100%;
    height: 90%;
    border: 3px solid var(--red-700);
    border-radius: 2rem;
    background-color: #fff;
  }
`;

export const Content = styled.section`
  padding: 0 1rem;
  display: flex;
  height: 100%;
  background: var(--red-500);
`;

export const HeaderContent = styled.div`
  padding: 1rem;
  display: flex;

  align-items: center;

  h1 {
    width: 100%;
    color: var(--red-500);
  }
`;

export const Line = styled.div`
  padding: 0 1rem;
`;
export const CardsContainer = styled.div`
  width: 92%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: center;
  align-items: center;
  section {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    justify-content: center;
    align-items: center;
  }
`;

export const Pagination = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  label {
    color: #fff;
    font-weight: bold;
    font-size: 1.5rem;
  }
`;
