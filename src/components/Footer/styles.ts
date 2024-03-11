import styled from "styled-components";

export const Container = styled.div`
    padding: 2rem ;
    background: linear-gradient(
        90deg,
        rgba(177, 72, 138, 1) 0%,
        rgba(158, 16, 106, 1) 100%
    );
    box-shadow: 0 2px 4px rgba(2, 15, 29, 0.242);
    
    
`;

export const FooterWrapper = styled.footer`    
        
`;

export const FooterInner = styled.div`


    display: flex;
    justify-content: center;
    align-items: center;
    
    margin: 0 auto;
    padding: 0 2rem;
`;

export const FooterLinks = styled.div`

    display: flex;
    justify-content: center;
    text-align: center;
    width: 80%;
   

    .link {
        width: 100%;
        
        display: flex;
        flex-direction: column;
        align-items: center;
        a {
            margin-bottom: 1rem;
            font-size: 1.2rem;
            color: #fff;
            text-decoration: none;
            transition: color 0.3s ease;
            &:hover {
                color: #b1488a;
            }
        }
    }
`;

export const Logo = styled.img`
   width:100%;
    
`;

export const FooterTitle = styled.div`
    font-size: 1.5rem;
    font-weight: bold;
    margin-bottom: 1rem;
`;
