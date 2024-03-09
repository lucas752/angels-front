import {
  CaretCircleDoubleLeft,
  CaretCircleDoubleRight,
  PlusCircle
} from '@phosphor-icons/react';
import { PregnancyCard } from '../../components/PregnancyCard';
import { PregnantPersonalInfo } from '../../features/Pregnancies/PregnantPersonalInfo';
import * as S from './styles';
import { useState } from 'react';

export default function Pregnancies() {
  const [currentPage, setCurrentPage] = useState<number>(0);
  const [page, setPage] = useState<number>(1);

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
      },
      {
        id: '32',
        weeks: '39',
        gestacionalRisk: false,
        pregnancyStatus: 'Finalizada com sucesso',
        pregnantName: 'Júlia da Silva Santos'
      },
      {
        id: '32',
        weeks: '39',
        gestacionalRisk: false,
        pregnancyStatus: 'Finalizada com sucesso',
        pregnantName: 'Júlia da Silva Santos'
      }
    ]
  };

  const renderCards = () => {
    return pregnantInfo.pregnancies
      .slice(currentPage, currentPage + 4)
      .map((item, index) => (
        <PregnancyCard
          key={index}
          id={item.id}
          gestationalRisk={item.gestacionalRisk}
          pregnancyStatus={item.pregnancyStatus}
          weeks={item.weeks}
        />
      ));
  };

  const previous = () => {
    if (currentPage - 4 >= 0) {
      setCurrentPage(currentPage - 4);
      setPage((prev) => prev - 1);
    }
  };

  const next = () => {
    if (currentPage + 4 < pregnantInfo.pregnancies.length) {
      setCurrentPage(currentPage + 4);
      setPage((prev) => prev + 1);
    }
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
      <S.CardsContainer>{renderCards()}</S.CardsContainer>
      {pregnantInfo.pregnancies.length > 4 ? (
        <S.ArrowsContainer>
          {page == 1 ? (
            <></>
          ) : (
            <CaretCircleDoubleLeft
              size={40}
              color="#B1488A"
              onClick={previous}
              cursor={'Pointer'}
            />
          )}
          <CaretCircleDoubleRight
            size={40}
            color="#B1488A"
            onClick={next}
            cursor={'Pointer'}
          />
        </S.ArrowsContainer>
      ) : (
        <></>
      )}
    </S.Container>
  );
}
