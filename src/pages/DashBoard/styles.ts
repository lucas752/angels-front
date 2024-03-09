import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;

  @media (min-width: 426px) and (max-width: 768px) {
    height: 100%;
  }
  @media (min-width: 1024px) {
    height: 100dvh;
  }
`;

export const NavBarContainer = styled.section`
  display: none;
  justify-content: center;
  align-items: center;

  @media (min-width: 426px) and (max-width: 768px) {
    display: flex;
  }
  @media (min-width: 1024px) {
    display: flex;
  }
`;

export const Content = styled.section`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  height: 100%;
  align-items: center;
  /* background: var(--red-500); */
  @media (min-width: 426px) and (max-width: 768px) {
    padding: 1rem;
    flex-direction: column;
    align-items: center;
  }
  @media (min-width: 1024px) {
    flex-direction: row;
    padding: 0 1rem;
    align-items: normal;
  }
`;

export const HeaderContent = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: var(--red-500);
  h1 {
    width: 100%;
    color: #fff;
    font-size: 0.875rem;
    @media (min-width: 426px) and (max-width: 768px) {
      font-size: 1.5rem;
    }
    @media (min-width: 1024px) {
      font-size: 2rem;
    }
  }

  @media (min-width: 426px) and (max-width: 768px) {
    flex-direction: row;
  }
  @media (min-width: 1024px) {
    flex-direction: row;
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
    flex-direction: column;
    flex-wrap: nowrap;
    gap: 1rem;
    justify-content: center;
    align-items: center;

    @media (min-width: 426px) and (max-width: 768px) {
      flex-wrap: nowrap;
      flex-direction: column;
    }
    @media (min-width: 1024px) {
      flex-wrap: wrap;
      flex-direction: row;
    }
  }
`;

export const Pagination = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  label {
    color: #b1488a;
    font-weight: bold;
    font-size: 1.5rem;
  }

  svg {
    cursor: pointer;
  }
`;
