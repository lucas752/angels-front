import * as S from './styles';
import Logo from '../../../assets/whiteLogoSVG.svg';

export const PregnantCard = () => {
  return (
    <S.Container>
      <S.LogoContainer>
        <img src={Logo} alt="" />
      </S.LogoContainer>
      <S.InfoContainer>
        <div>
          <S.Text $primary>Nome da gestante:</S.Text>
          <S.Text>Maria Joana Ferreira</S.Text>
        </div>
        <div>
          <S.Text $primary>Semana de gestação:</S.Text>
          <S.Text>14 semanas</S.Text>
        </div>
        <div>
          <S.Text $primary>Status:</S.Text>
          <S.Text>Tranquila</S.Text>
        </div>
      </S.InfoContainer>
    </S.Container>
  );
};
