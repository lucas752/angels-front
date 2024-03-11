import styled from "styled-components";

export const Container = styled.div`
    padding: 30px;
    background: rgb(177, 72, 138);
    background: linear-gradient(
    90deg,
    rgba(177, 72, 138, 1) 0%,
    rgba(158, 16, 106, 1) 100%
    );
    bottom: 0;
    left: 0;
    width: 100%;
    position: fixed;
    box-shadow: 0 2px 4px rgba(2, 15, 29, 0.242);
`;

export const Links = styled.ul`
    display: flex;
    justify-content: center;
    list-style: none;
    padding: 0;
`;

export const LinkItem = styled.li`
    margin: 0 10px;
`;

export const Info = styled.div`
    color: white;
    text-align: center;
    margin-top: 20px;
`;
