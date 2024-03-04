import { PlusCircle } from '@phosphor-icons/react';
import { PregnancyCard } from './components/PregnancyCard';
import { PregnantPersonalInfo } from './components/PregnantPersonalInfo';
import * as S from './styles';

export default function Pregnancies() {
  let pregnantInfo = {
    name: 'Júlia da Silva Santos',
    cpf: '123.456.789-09',
    pregnancies: [
      {
        id: '15',
        weeks: '30',
        gestacionalRisk: 'Habitual',
        pregnancyStatus: 'Em andamento'
      },
      {
        id: '8',
        weeks: '39',
        gestacionalRisk: 'Não informado',
        pregnancyStatus: 'Finalizada com sucesso'
      },
      {
        id: '5',
        weeks: '39',
        gestacionalRisk: 'Alto',
        pregnancyStatus: 'Finalizada com sucesso'
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
