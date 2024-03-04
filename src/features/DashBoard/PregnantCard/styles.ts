import styled from 'styled-components';

export const Container = styled.div`
  width: 28%;
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
`;

export const LogoContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  img {
    width: 16%;
  }
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  div {
    display: flex;
    gap: 4px;
  }
`;

export const Text = styled.label<{ $primary?: boolean }>`
  color: ${(props) => (props.$primary ? 'var(--red-500)' : '#000')};
  font-weight: ${(props) => (props.$primary ? '600' : '400')};
`;
