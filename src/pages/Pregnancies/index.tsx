import {
  ArrowCircleDown,
  ArrowCircleUp,
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
import { PregnantInfo } from '../../features/Pregnancies/PregnantInfo';
import { GetPregnantInfo } from '../../services/PregnantServices';
import moment from 'moment';
import { useParams } from 'react-router-dom';
import { Empty } from 'antd';

export default function Pregnancies() {
  const params = useParams();

  if (params.id == undefined) {
    return null;
  }

  const [currentPage, setCurrentPage] = useState<number>(0);
  const [page, setPage] = useState<number>(1);
  const [name, setName] = useState<string>('');
  const [cpf, setCpf] = useState<string>('');
  const [pregnanciesData, setPregnanciesData] = useState<PregnancyInterface[]>(
    []
  );
  const [toggleInfo, setToggleInfo] = useState(false);

  useEffect(() => {
    const pregnanciesRequest = async () => {
      const requestResponse = await GetPregnancies();
      if (requestResponse?.status == 200) {
        setPregnanciesData(requestResponse.data);
      }
    };

    const getPregnantInfo = async () => {
      if (params.id) {
        const response = await GetPregnantInfo(parseInt(params.id));
        if (response?.status == 200) {
          setName(response.data.nome);
          setCpf(response.data.cpf);
        }
      }
    };

    pregnanciesRequest();
    getPregnantInfo();
  }, []);

  const renderCards = () => {
    const currentDate = moment();
    return pregnanciesData
      .filter((item) => item.gestante.id === parseInt(params.id || ''))
      .slice(currentPage, currentPage + 4)
      .map((item, index) => (
        <PregnancyCard
          key={index}
          id={item.id}
          gestationalRisk={true}
          pregnancyStatus={item.situacaoGestacional}
          weeks={currentDate.diff(item.dataInicioGestacao, 'weeks').toString()}
        />
      ));
  };

  const previous = () => {
    if (currentPage - 4 >= 0) {
      setCurrentPage(currentPage - 4);
      setPage((prev) => prev - 1);
    }
  };

  const toggleExpandInfo = () => {
    setToggleInfo(!toggleInfo);
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
        <PregnantPersonalInfo name="Nome" value={name} />
        <PregnantPersonalInfo name="CPF" value={cpf} />
      </S.PregnantInfoContainer>
      {toggleInfo ? (
        <ArrowCircleUp
          size={25}
          cursor={'Pointer'}
          color="#B1488A"
          weight="bold"
          onClick={toggleExpandInfo}
        />
      ) : (
        <ArrowCircleDown
          size={25}
          cursor={'Pointer'}
          color="#B1488A"
          weight="bold"
          onClick={toggleExpandInfo}
        />
      )}

      {toggleInfo ? <PregnantInfo id={parseInt(params.id)} /> : <></>}
      {pregnanciesData.length > 0 ? (
        <S.CardsContainer>{renderCards()}</S.CardsContainer>
      ) : (
        <S.EmptyBox
          image={Empty.PRESENTED_IMAGE_SIMPLE}
          description="Sem gestações cadastradas"
        />
      )}

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
