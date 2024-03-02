import * as S from './styles';
import Logo from '../../../assets/whiteLogoSVG.svg';

export const PregnantCard = () => {
  return (
    <S.Container>
      <div>
        <img src={Logo} alt="" />
      </div>
      <div>
        <div>Nome da gestante:</div>
        <div>Semana de gestação:</div>
        <div>Status:</div>
      </div>
    </S.Container>
  );
};
