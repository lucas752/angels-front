import styled from "styled-components";

export const Container = styled.div`
    padding: 0 10rem 5rem;
    background-color: white;
`;

export const DataWrapper = styled.div`

`;

export const DataHeader = styled.div`
    font-size: 2.8rem;
    font-weight: 600;
    color: #9D0B67;
    padding: 2rem 0;
    text-align: center;
`;

export const DataGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr); /* Corrigindo o nome da propriedade */
    gap: 2rem;
`;

export const DataCard = styled.div`
    min-height: 10rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: #d9d9d9;
    box-shadow: 0 1px 1px rgba(177, 72, 138, 0.1), 
    0 2px 2px rgba(177, 72, 138, 0.1),
    0 2px 2px rgba(177, 72, 138, 0.1),
    0 6px 8px rgba(177, 72, 138, 0.15),
    0 6px 10px rgba(177, 72, 138, 0.15);
    // 0 1px 1px rgba(0, 0, 0, 0.11), 0 2px 2px rgba(0, 0, 0, 0.11),
    // 0 2px 2px rgba(0, 0, 0, 0.11), 0 6px 8px rgba(0, 0, 0, 0.11),
    // 0 6px 10px rgba(0, 0, 0, 0.11);
    border-radius: 30px;
    padding: 3%;
`;

export const DataTitle = styled.h3`
    font-size: 2rem;
    font-weight: 600;
    color: #9D0B67;
    margin-bottom: 1rem;
`;

export const DataNumber = styled.div`
    font-size: 2rem;
    font-weight: bold;
    margin-right: 0.5rem;
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);
`;

export const DataText = styled.span`
    color: #9D0B67;
    font-size: 20px;
    margin-left: 5px;
    font-weight: 600;
`; 

export const DataItem = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 1rem;
`; 
