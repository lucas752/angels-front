import styled from 'styled-components';

export const Container = styled.div`
  background-color: white;
  display: flex;
  align-items: center;
  width: 100%;
  padding: 0 4rem 0 2rem;
  box-shadow: 0 2px 4px rgba(2, 15, 29, 0.242);
  z-index: 999;
  position: relative;

  div {
    flex: 1;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  a {
    font-size: 1.3rem;
    color: #b1488a;
    text-decoration: none;
    transition: color 0.2s, background-color 0.2s;
    cursor: pointer;
    margin: 0 1rem;
    font-weight: bold;
    position: relative;
    padding: 0.5rem 1rem;
  }

  a:hover {
    background-color: #f0f0f0;
  }

  a::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -4px;
    width: 100%;
    height: 3px;
    background-color: transparent;
    transition: background-color 0.2s;
  }

  a:hover::after,
  a.active::after {
    background-color: #b1488a;
  }
`;

export const Logo = styled.img`
  width: 180px;
  height: 140px;
`;

export const Navigation = styled.header`
  width: 100%;
`;

export const Nav = styled.nav`
  align-items: center;
  display: flex;
  justify-content: space-between;
`;

export const Ul = styled.ul`
  display: flex;
  padding: 2rem 0;
  width: 60%;
  justify-content: space-between;
  list-style: none;
  margin-top: 2px;
`;

export const Li = styled.li``;