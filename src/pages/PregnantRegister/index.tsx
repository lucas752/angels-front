import { XCircle } from '@phosphor-icons/react';
import * as S from './styles';
import Logo from '../../assets/angelsLogo.svg';

export function PregnantRegister() {
  return (
    <S.Container>
      <div>
        <S.TopContainer>
          <XCircle size={32} weight="fill" color="#B1488A" />
          <img src={Logo} alt="angels logo" />
        </S.TopContainer>
        <S.FormContainer>input</S.FormContainer>
      </div>
    </S.Container>
  );
}
