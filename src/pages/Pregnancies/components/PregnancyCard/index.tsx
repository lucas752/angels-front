import { DotsThree, Plus } from '@phosphor-icons/react';
import WhiteLogo from '../../../../assets/angelsWhiteLogo.svg';
import * as S from './styles';

interface InfoProps {
  id: string;
  weeks: string;
  gestationalRisk: string;
  pregnancyStatus: string;
}

export const PregnancyCard: React.FC<InfoProps> = ({
  id,
  weeks,
  gestationalRisk,
  pregnancyStatus
}) => {
  return (
    <S.PregnancyCardContainer>
      <S.ImageContainer>
        <img src={WhiteLogo} />
      </S.ImageContainer>
      <S.PregnancyInfoContainer>
        <S.PregnancyInfoTitle>Gestação {id}</S.PregnancyInfoTitle>
        <S.PregnancyInfoTextContainer>
          <S.PregnancyInfoTitle>Semanas:</S.PregnancyInfoTitle>
          <S.PregnancyInfoContent>{weeks} semanas</S.PregnancyInfoContent>
        </S.PregnancyInfoTextContainer>
        <S.PregnancyInfoTextContainer>
          <S.PregnancyInfoTitle>Risco gestacional:</S.PregnancyInfoTitle>
          <S.PregnancyInfoContent>{gestationalRisk}</S.PregnancyInfoContent>
        </S.PregnancyInfoTextContainer>
        <S.PregnancyInfoTextContainer>
          <S.PregnancyInfoTitle>Status da gestação:</S.PregnancyInfoTitle>
          <S.PregnancyInfoContent>{pregnancyStatus}</S.PregnancyInfoContent>
        </S.PregnancyInfoTextContainer>
      </S.PregnancyInfoContainer>
      <S.PregnancyButtonsContainer>
        {pregnancyStatus == 'Em andamento' ? (
          <S.PregnancyCardButton>
            <Plus weight="bold" size={28} color="#B1488A" />
          </S.PregnancyCardButton>
        ) : (
          <></>
        )}
        <S.PregnancyCardButton>
          <DotsThree weight="bold" size={28} color="#B1488A" />
        </S.PregnancyCardButton>
      </S.PregnancyButtonsContainer>
    </S.PregnancyCardContainer>
  );
};
