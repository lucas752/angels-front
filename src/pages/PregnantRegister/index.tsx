import * as S from './styles';
import Logo from '../../assets/angelsLogo.svg';
import { Input } from '../../components/Input';

export function PregnantRegister() {
  return (
    <S.Container>
      <S.Contente>
        <S.TopContainer>
          <img src={Logo} alt="angels logo" />
        </S.TopContainer>
        <S.FormContainer>
          <Input />
        </S.FormContainer>
      </S.Contente>
    </S.Container>
  );
}
