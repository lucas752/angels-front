import * as S from './styles';
import Logo from '../../assets/angelsLogo.svg';

export function PregnantRegister() {
  return (
    <S.Container>
      <S.Contente>
        <S.TopContainer>
          <img src={Logo} alt="angels logo" />
        </S.TopContainer>
        <S.FormContainer>input</S.FormContainer>
      </S.Contente>
    </S.Container>
  );
}
