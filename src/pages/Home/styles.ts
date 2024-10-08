import styled from 'styled-components';

export const Container = styled.div`
  background: rgb(177, 72, 138);
  background: linear-gradient(
    90deg,
    rgba(177, 72, 138, 1) 0%,
    rgba(158, 16, 106, 1) 100%
  );
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: #fff;
  font-family: 'Inter', sans-serif;

  h1 {
    font-size: 3.6rem;
    // font-weight: 500;
    margin-bottom: 10px;

    @media (max-width: 768px) {
      font-size: 4.5rem;
      margin-top: 4rem;
      margin-bottom: 5px;
    }
  }

  p {
    font-size: 1.6rem;
    margin-right: 20px;

    @media (max-width: 768px) {
      width: 90%;
      margin-top: 4rem;
      font-size: 1.2rem;
      margin: 0 20px 20px 20px;
    }
  }
`;
