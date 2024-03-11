import styled from "styled-components";

export const NoRightPadding = styled.div`
    padding: 0 0 0 10rem;
`;

export const AngelsWrapper = styled.div`
    width: 100%;
    display: flex;
    height: 100dvh;
`;

export const AngelsContent = styled.div`
    width: 30%;
`;
export const AngelsImage = styled.div`
    width: 70%;
    position: relative;

    background-position: 15% 85%;

    img {
        margin-top: 1rem;
        width: 100%;
        position: absolute;
    }
`;

export const AngelsContentWrapper = styled.div`
    margin-top: 100px;

    p {
        padding: 0 2rem 0 0;
    }
`;