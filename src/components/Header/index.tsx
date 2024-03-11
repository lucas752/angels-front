import * as S from './styles';
import logo from '../../assets/angelsLogo.svg';
import React, { useEffect, useState } from 'react'; 
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '../Button';

interface HeaderProps {}

export const Header: React.FC<HeaderProps> = () => {
  const navigate = useNavigate();
  const [activeLink, setActiveLink] = useState('HOME');

  const handleClick = (link: string) => {
    setActiveLink(link);
  };

  const dashboardScreen = () => {
    navigate('/dashboard');
  };

  useEffect(() => {
    
    setActiveLink('HOME');
  }, []);

  return (
    <S.Container>
      <div>
        <S.Navigation>
          <S.Nav>
            <S.Logo src={logo} alt="Angels logo" />
            <S.Ul>
              <S.Li>
                <Link
                  to="#1"
                  onClick={() => handleClick('HOME')}
                  className={activeLink === 'HOME' ? 'active' : ''}
                >
                  HOME
                </Link>
              </S.Li>
              <S.Li>
                <Link
                  to="#2"
                  onClick={() => handleClick('SOBRE')}
                  className={activeLink === 'SOBRE' ? 'active' : ''}
                >
                  SOBRE
                </Link>
              </S.Li>
              <S.Li>
                <Link
                  to="#3"
                  onClick={() => handleClick('DADOS')}
                  className={activeLink === 'DADOS' ? 'active' : ''}
                >
                  DADOS
                </Link>
              </S.Li>
              <S.Li>
                <Link
                  to="#4"
                  onClick={() => handleClick('EQUIPE')}
                  className={activeLink === 'EQUIPE' ? 'active' : ''}
                >
                  EQUIPE
                </Link>
              </S.Li>
              <S.Li>
                <Link
                  to="#5"
                  onClick={() => handleClick('PARCEIROS')}
                  className={activeLink === 'PARCEIROS' ? 'active' : ''}
                >
                  PARCEIROS
                </Link>
              </S.Li>
              <S.Li>
                <Link
                  to="#6"
                  onClick={() => handleClick('FALE CONOSCO')}
                  className={activeLink === 'FALE CONOSCO' ? 'active' : ''}
                >
                  FALE CONOSCO
                </Link>
              </S.Li>
            </S.Ul>
            <Button label="ENTRAR" buttonFunction={dashboardScreen} size='large'/>
          </S.Nav>
        </S.Navigation>
      </div>
    </S.Container>
  );
};
