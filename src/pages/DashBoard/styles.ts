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
  div {
    width: 100%;
    height: 100%;
    border: 3px solid var(--red-700);
    border-radius: 2rem;
    background-color: #fff;
  }
`;

export const Content = styled.section`
  padding: 0 1rem;
  display: flex;
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
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
  align-items: center;
`;
