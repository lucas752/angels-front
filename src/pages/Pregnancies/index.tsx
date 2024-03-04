import { PlusCircle } from '@phosphor-icons/react';
import { PregnancyCard } from '../../components/PregnancyCard';
import { PregnantPersonalInfo } from '../../features/Pregnancies/PregnantPersonalInfo';
import * as S from './styles';

export default function Pregnancies() {
  let pregnantInfo = {
    name: 'Júlia da Silva Santos',
    cpf: '123.456.789-09',
    pregnancies: [
      {
        id: '15',
        weeks: '30',
        gestacionalRisk: false,
        pregnancyStatus: 'Em andamento',
        pregnantName: 'Júlia da Silva Santos'
      },
      {
        id: '8',
        weeks: '39',
        gestacionalRisk: false,
        pregnancyStatus: 'Finalizada com sucesso',
        pregnantName: 'Júlia da Silva Santos'
      },
      {
        id: '5',
        weeks: '39',
        gestacionalRisk: true,
        pregnancyStatus: 'Finalizada com sucesso',
        pregnantName: 'Júlia da Silva Santos'
      },
      {
        id: '9',
        weeks: '39',
        gestacionalRisk: false,
        pregnancyStatus: 'Finalizada com sucesso',
        pregnantName: 'Júlia da Silva Santos'
      }
    ]
  };

  return (
    <S.Container>
      <S.Header>
        <S.PregnanciesText>GESTAÇÕES</S.PregnanciesText>
        <S.NewPregnancyButton>
          <PlusCircle size={18} weight="bold" />
          NOVA GESTAÇÃO
        </S.NewPregnancyButton>
      </S.Header>
      <S.PregnantInfoContainer>
        <PregnantPersonalInfo name="Nome" value={pregnantInfo.name} />
        <PregnantPersonalInfo name="CPF" value={pregnantInfo.cpf} />
      </S.PregnantInfoContainer>
      <S.CardsContainer>
        {pregnantInfo.pregnancies.map((item) => (
          <PregnancyCard
            id={item.id}
            gestationalRisk={item.gestacionalRisk}
            pregnancyStatus={item.pregnancyStatus}
            weeks={item.weeks}
          />
        ))}
      </S.CardsContainer>
    </S.Container>
  );
}
