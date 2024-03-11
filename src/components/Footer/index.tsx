import * as S from './styles';
import { Link } from 'react-router-dom';
import WhiteLogo from '../../assets/angelsWhiteLogo.svg';

export const Footer = () => {

    const scrollToElement = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
    <S.FooterWrapper id="footer">
        <S.Container>
            <S.FooterInner>
                <S.FooterLinks>
                    <S.Logo src={WhiteLogo} alt=""/>
                    <div className='link'>
                        <S.FooterTitle>Links Úteis</S.FooterTitle>
                        <Link to="#home" onClick={() => scrollToElement('home')}>Home</Link>
                        <Link to="#about" onClick={() => scrollToElement('about')}>Sobre</Link>
                        <Link to="#data" onClick={() => scrollToElement('data')}>Informações</Link>
                        {/* <Link to="#4">Equipe</Link> */}
                        <Link to="#partners" onClick={() => scrollToElement('partners')}>Parceiros</Link>
                    </div>
                    <div className='link'>
                        <S.FooterTitle>Links Parceiros</S.FooterTitle>
                        <Link to="https://www.upe.br/">UPE</Link>
                        <Link to="https://www.facepe.br/">FACEPE</Link>
                        <Link to="https://www.gov.br/cnpq/pt-br">CNPq</Link>
                        <Link to="https://w2.solucaoatrio.net.br/somos/upe-ppgec/index.php/pt/">PPGEC-UPE</Link>
                        <Link to="https://iidb.ie/dotlab-brazil/">dotLAB Brazil</Link>
                        <Link to="https://maecoruja.pe.gov.br/">Mãe Coruja</Link>
                    </div>
                    <div className='link'>
                        <S.FooterTitle>Links Importantes</S.FooterTitle>
                        <Link to="https://www.who.int/pt">OMS</Link>
                        <Link to="https://www.gov.br/saude/pt-br">Ministério da Saúde</Link>
                        <Link to="https://www.gov.br/saude/pt-br/assuntos/saude-de-a-a-z/s/sus">SUS</Link>
                    </div>
                </S.FooterLinks>
            </S.FooterInner>
        </S.Container>
    </S.FooterWrapper>
    );
};
