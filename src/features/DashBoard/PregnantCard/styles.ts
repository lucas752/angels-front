import styled from 'styled-components';

export const Container = styled.div`
  width: 30%;
  background: rgba(177, 72, 138, 0.2);
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 1rem;
  gap: 8px;
`;

export const LogoContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  img {
    width: 16%;
  }
`;
