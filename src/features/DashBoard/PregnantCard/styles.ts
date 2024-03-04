import styled from 'styled-components';

export const Container = styled.div`
  min-width: 28%;
  background: var(--gray-500);
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 1rem;
  gap: 8px;
  box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1),
    0 8px 10px -6px rgb(0 0 0 / 0.1);

  @media (min-width: 426px) and (max-width: 768px) {
    flex-direction: row;
    align-items: center;
  }
  @media (min-width: 1024px) {
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
  }
`;

export const LogoContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  img {
    width: 20%;
    @media (min-width: 426px) and (max-width: 768px) {
      width: 50%;
    }
    @media (min-width: 1024px) {
      width: 16%;
    }
  }

  @media (min-width: 426px) and (max-width: 768px) {
    width: auto;
  }
  @media (min-width: 1024px) {
    width: 100%;
  }
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  @media (min-width: 426px) and (max-width: 768px) {
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
    gap: 1rem;
  }
  @media (min-width: 1024px) {
    flex-direction: column;
    gap: 1rem;
  }

  div {
    display: flex;
    gap: 4px;
    @media (min-width: 426px) and (max-width: 768px) {
      min-width: 30%;
    }
    @media (min-width: 1024px) {
      width: auto;
    }
  }
`;

export const Text = styled.label<{ $primary?: boolean }>`
  color: ${(props) => (props.$primary ? 'var(--red-500)' : '#000')};
  font-weight: ${(props) => (props.$primary ? '600' : '400')};
`;
