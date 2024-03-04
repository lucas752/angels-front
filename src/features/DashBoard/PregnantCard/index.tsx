import * as S from './styles';
import Logo from '../../../assets/whiteLogoSVG.svg';

interface CardProps {
  name: string;
  weeks: string;
  status: string;
}

export const PregnantCard: React.FC<CardProps> = ({ name, weeks, status }) => {
  return (
    <S.Container>
      <S.LogoContainer>
        <img src={Logo} alt="" />
      </S.LogoContainer>
      <S.InfoContainer>
        <div>
          <S.Text $primary>Nome da gestante:</S.Text>
          <S.Text>{name}</S.Text>
        </div>
        <div>
          <S.Text $primary>Semana de gestação:</S.Text>
          <S.Text>{weeks} semanas</S.Text>
        </div>
        <div>
          <S.Text $primary>Status:</S.Text>
          <S.Text>{status}</S.Text>
        </div>
      </S.InfoContainer>
    </S.Container>
  );
};
