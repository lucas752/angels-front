import * as S from "./styles";
import { Button } from "../../../features/Home/Button";
import WhiteLogo from '../../../assets/angelsWhiteLogo.svg';
import { useNavigate } from 'react-router-dom';

export const Angels = () => {
    const navigate = useNavigate();
    
    const dashboardScreen = () => {
        navigate('/dashboard');
      };

    return (
        <S.NoRightPadding>
            <S.AngelsWrapper id="home">
                <S.AngelsContent>
                    <S.AngelsContentWrapper>
                        <h1>An Intelligent Gestational Follow-up System</h1>
                        <p>"Se mudarmos o começo da história, mudamos a história toda." - Documentário "O Começo da Vida"</p>
                        <Button label="ACESSE O SISTEMA" buttonFunction={dashboardScreen} size='large'/>
                    </S.AngelsContentWrapper>
                </S.AngelsContent>
                <S.AngelsImage>
                    <img src={WhiteLogo} alt="Logo Branca angels" />
                </S.AngelsImage>
            </S.AngelsWrapper>
        </S.NoRightPadding>  
    )
}