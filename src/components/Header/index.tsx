import * as S from './styles';
import logo  from '../../assets/angelsLogo.svg'
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../Button';

interface HeaderProps {}

export const Header: React.FC<HeaderProps> = () => {
  const [activeLink, setActiveLink] = useState('');

  const handleClick = (link: string) => {
    setActiveLink(link);
  };

  return (
    <S.Container>
      <div>
        <S.Navigation>
          <S.Nav>
            <S.Logo src={logo} alt="Angels logo" />
            <S.Ul>
              <S.Li>
                <Link
                  to="#"
                  onClick={() => handleClick('HOME')}
                  className={activeLink === 'HOME' ? 'active' : ''}
                >
                  HOME
                </Link>
              </S.Li>
              <S.Li>
                <Link
                  to="#"
                  onClick={() => handleClick('SOBRE')}
                  className={activeLink === 'SOBRE' ? 'active' : ''}
                >
                  SOBRE
                </Link>
              </S.Li>
              <S.Li>
                <Link
                  to="#"
                  onClick={() => handleClick('CONTATOS')}
                  className={activeLink === 'CONTATOS' ? 'active' : ''}
                >
                  EQUIPE
                </Link>
              </S.Li>
              <S.Li>
                <Link
                  to="#"
                  onClick={() => handleClick('FALE CONOSCO')}
                  className={activeLink === 'FALE CONOSCO' ? 'active' : ''}
                >
                  FALE CONOSCO
                </Link>
              </S.Li>
            </S.Ul>
            <Button label="ENTRAR" />
          </S.Nav>
        </S.Navigation>
      </div>
    </S.Container>
  );
};