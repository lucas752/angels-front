import {
  CaretCircleDoubleLeft,
  CaretCircleDoubleRight,
  PlusCircle
} from '@phosphor-icons/react';
import { PregnancyCard } from '../../components/PregnancyCard';
import { PregnantPersonalInfo } from '../../features/Pregnancies/PregnantPersonalInfo';
import * as S from './styles';
import { useEffect, useState } from 'react';
import { GetPregnancies } from '../../services/PregnancyServices';
import { PregnancyInterface } from '../../services/PregnancyServices/interfaces';

export default function Pregnancies() {
  const [currentPage, setCurrentPage] = useState<number>(0);
  const [page, setPage] = useState<number>(1);
  const [pregnanciesData, setPregnanciesData] = useState<PregnancyInterface[]>(
    []
  );
  const userId = 1;

  useEffect(() => {
    const pregnanciesRequest = async () => {
      const requestResponse = await GetPregnancies();
      if (requestResponse.status == 200) {
        setPregnanciesData(requestResponse.data);
      }
    };

    pregnanciesRequest();
  }, []);

  const renderCards = () => {
    return pregnanciesData
      .filter((item) => item.gestante.id === userId)
      .slice(currentPage, currentPage + 4)
      .map((item, index) => (
        <PregnancyCard
          key={index}
          id={item.id}
          gestationalRisk={true}
          pregnancyStatus={item.situacaoGestacional}
          weeks={new Date(item.dataInicioGestacao).toLocaleDateString()}
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
    if (currentPage + 4 < pregnanciesData.length) {
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
        <PregnantPersonalInfo
          name="Nome"
          value={
            pregnanciesData.length > 0 ? pregnanciesData[0].gestante.nome : ''
          }
        />
        <PregnantPersonalInfo
          name="CPF"
          value={
            pregnanciesData.length > 0 ? pregnanciesData[0].gestante.cpf : ''
          }
        />
      </S.PregnantInfoContainer>
      <S.CardsContainer>{renderCards()}</S.CardsContainer>
      {pregnanciesData.length > 4 ? (
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
