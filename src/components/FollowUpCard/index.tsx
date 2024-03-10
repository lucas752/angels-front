import * as S from './styles';

interface InfoProps {
  id?: number;
  date: string;
  madeBy: string;
  weight: number;
  gestationalAge: number;
  bloodPressure: string;
  heartRate: number;
  uterineHeight: number;
  type: string;
}

export const FollowUpCard: React.FC<InfoProps> = ({
  date,
  bloodPressure,
  weight,
  gestationalAge,
  madeBy,
  heartRate,
  uterineHeight,
  type
}) => {
  return (
    <S.FollowUpCardContainer>
      <S.ColumnCardContainer>
        <S.CardInfoTitle>Data do acompanhamento</S.CardInfoTitle>
        <S.CardInfoContent>{date}</S.CardInfoContent>
        <S.CardInfoTitle>Peso atual</S.CardInfoTitle>
        <S.CardInfoContent>{weight} KG</S.CardInfoContent>
        <S.CardInfoTitle>Idade Gestacional</S.CardInfoTitle>
        <S.CardInfoContent>{gestationalAge} semanas</S.CardInfoContent>
        <S.CardInfoTitle>Realizado por:</S.CardInfoTitle>
        <S.CardInfoContent>{madeBy}</S.CardInfoContent>
      </S.ColumnCardContainer>
      <S.ColumnCardContainer>
        <S.CardInfoTitle>Pressão arterial:</S.CardInfoTitle>
        <S.CardInfoContent>{bloodPressure} mmHg</S.CardInfoContent>
        <S.CardInfoTitle>Batimentos cardiacos</S.CardInfoTitle>
        <S.CardInfoContent>{heartRate} bpm</S.CardInfoContent>
        <S.CardInfoTitle>Altura uterina</S.CardInfoTitle>
        <S.CardInfoContent>{uterineHeight} cm</S.CardInfoContent>
        <S.CardInfoTitle>Tipo</S.CardInfoTitle>
        <S.CardInfoContent>{type}</S.CardInfoContent>
      </S.ColumnCardContainer>
    </S.FollowUpCardContainer>
  );
};
