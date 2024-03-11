import { DotsThree, Plus } from '@phosphor-icons/react';
import WhiteLogo from '../../assets/angelsWhiteLogo.svg';
import * as S from './styles';

interface InfoProps {
  id: number;
  weeks: string;
  pregnantName?: string;
  gestationalRisk: boolean;
  pregnancyStatus: number;
  onClickFunc?: React.MouseEventHandler<HTMLDivElement>;
  onClickAdd?: React.MouseEventHandler<HTMLButtonElement>;
  onClickThreeDots?: React.MouseEventHandler<HTMLButtonElement>;
}

export const PregnancyCard: React.FC<InfoProps> = ({
  id,
  weeks,
  pregnantName,
  pregnancyStatus,
  gestationalRisk,
  onClickFunc,
  onClickAdd,
  onClickThreeDots
}) => {
  const pregnancyStatusDescription =
    pregnancyStatus == 0
      ? 'Em andamento'
      : pregnancyStatus == 1
      ? 'Finalizada com sucesso'
      : 'Finalizada com desfecho negativo';
  return (
    <S.PregnancyCardContainer>
      <S.PregnancyInfoContainer onClick={onClickFunc}>
        <S.LineContainer>
          {gestationalRisk ? <S.RedRiskLine /> : <S.RiskLine />}
        </S.LineContainer>
        <S.ImageContainer>
          <img src={WhiteLogo} />
        </S.ImageContainer>
        {pregnantName ? (
          <S.PregnancyInfoTextContainer>
            <S.PregnancyInfoTitle>Nome da gestante:</S.PregnancyInfoTitle>
            <S.PregnancyInfoContent>{pregnantName}</S.PregnancyInfoContent>
          </S.PregnancyInfoTextContainer>
        ) : (
          <S.PregnancyInfoTitle>Gestação {id}</S.PregnancyInfoTitle>
        )}
        <S.PregnancyInfoTextContainer>
          <S.PregnancyInfoTitle>Semanas:</S.PregnancyInfoTitle>
          <S.PregnancyInfoContent>{weeks} semanas</S.PregnancyInfoContent>
        </S.PregnancyInfoTextContainer>
        <S.PregnancyInfoTextContainer>
          <S.PregnancyInfoTitle>Status da gestação:</S.PregnancyInfoTitle>
          <S.PregnancyInfoContent>
            {pregnancyStatusDescription}
          </S.PregnancyInfoContent>
        </S.PregnancyInfoTextContainer>
      </S.PregnancyInfoContainer>
      <S.PregnancyButtonsContainer>
        {pregnancyStatus == 0 ? (
          <S.PregnancyCardButton onClick={onClickAdd}>
            <Plus weight="bold" size={28} color="#B1488A" />
          </S.PregnancyCardButton>
        ) : (
          <></>
        )}
        <S.PregnancyCardButton onClick={onClickThreeDots}>
          <DotsThree weight="bold" size={28} color="#B1488A" />
        </S.PregnancyCardButton>
      </S.PregnancyButtonsContainer>
    </S.PregnancyCardContainer>
  );
};
