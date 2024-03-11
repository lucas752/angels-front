import styled from "styled-components";

export const Container = styled.div`
    height: 10rem;
    margin: 0 0.5rem;
    padding: 0 0.5rem;
    border-radius: 10px;
    cursor: pointer;
    position: relative;
    overflow: hidden;

    img {
        width: 100%;
        height: 100%;
        transition: box-shadow 0.8s ease-in-out;
        transition: transform 0.3s ease-in-out;
    }   

    &:hover img {
        box-shadow: 0 0 10px rgba(177, 72, 138, 0.5);
        transform: scale(1.1);
    }
`;