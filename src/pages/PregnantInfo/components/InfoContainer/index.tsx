import * as S from './styles';

interface InfoProps {
  name?: string;
  value?: string;
}

export const InfoContainer: React.FC<InfoProps> = ({ name, value }) => {
  return (
    <S.InfoContainer>
      <S.InfoTitle>{name}</S.InfoTitle>
      <S.InfoValue>{value}</S.InfoValue>
    </S.InfoContainer>
  );
};
