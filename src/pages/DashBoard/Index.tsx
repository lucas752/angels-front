import {
  CaretCircleLeft,
  CaretCircleRight,
  DotsThreeOutline
} from '@phosphor-icons/react';

import * as S from './styles.ts';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SideBar from '../../components/SideBar/index.tsx';
import { PregnancyCard } from '../../components/PregnancyCard/index.tsx';

export function Dashboard() {
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState<number>(0);
  const [page, setPage] = useState<number>(1);
  const cardData = [
    {
      name: 'Maria Joana Ferreira',
      weeks: '14',
      status: 'Risco'
    },
    {
      name: 'Ana Carolina Santos',
      weeks: '20',
      status: 'Alto Risco'
    },
    {
      name: 'Juliana Lima',
      weeks: '12',
      status: 'Moderado'
    },
    {
      name: 'Camila Pereira',
      weeks: '9',
      status: 'Estável'
    },
    {
      name: 'Mariana Oliveira',
      weeks: '7',
      status: 'Baixo Risco'
    },
    {
      name: 'Fernanda Silva',
      weeks: '22',
      status: 'Alto Risco'
    },
    {
      name: 'Beatriz Oliveira',
      weeks: '10',
      status: 'Estável'
    },
    {
      name: 'Gabriela Santos',
      weeks: '18',
      status: 'Risco Elevado'
    },
    {
      name: 'Carolina Lima',
      weeks: '15',
      status: 'Moderado'
    },
    {
      name: 'Laura Costa',
      weeks: '16',
      status: 'Estável'
    },
    {
      name: 'Patrícia Rodrigues',
      weeks: '11',
      status: 'Moderado'
    },
    {
      name: 'Isabela Oliveira',
      weeks: '13',
      status: 'Risco Elevado'
    },
    {
      name: 'Larissa Silva',
      weeks: '19',
      status: 'Alto Risco'
    },
    {
      name: 'Carla Martins',
      weeks: '8',
      status: 'Baixo Risco'
    },
    {
      name: 'Vanessa Gonçalves',
      weeks: '23',
      status: 'Alto Risco'
    },
    {
      name: 'Daniela Ferreira',
      weeks: '17',
      status: 'Risco Elevado'
    },
    {
      name: 'Tatiane Oliveira',
      weeks: '21',
      status: 'Alto Risco'
    },
    {
      name: 'Aline Santos',
      weeks: '24',
      status: 'Alto Risco'
    }
  ];

  const renderCards = () => {
    return cardData
      .slice(currentPage, currentPage + 3)
      .map((item) => (
        <PregnancyCard
          id={'1'}
          pregnantName={item.name}
          weeks={item.weeks}
          gestationalRisk={true}
          pregnancyStatus={item.weeks}
        />
      ));
  };

  const previous = () => {
    if (currentPage - 3 >= 0) {
      setCurrentPage(currentPage - 3);
      setPage((prev) => prev - 1);
    }
  };

  const next = () => {
    if (currentPage + 3 < cardData.length) {
      setCurrentPage(currentPage + 3);
      setPage((prev) => prev + 1);
    }
  };
  return (
    <S.Container>
      {/* <S.HeaderContent>
        <h1>ANGELS - Acompanhamento gestacional</h1>
        <Input
          placeHolder="Digite o nome da gestante..."
          rightAdd={<MagnifyingGlass size={20} color="#b1488a" />}
        />
        <Button
          label="NOVA GESTAÇÃO"
          shape="round"
          icon={<PlusCircle size={20} color="#fff" />}
          buttonFunction={pregnancyregisterScreen}
        />
      </S.HeaderContent> */}
      {/* <S.Line>
        <Divider />
      </S.Line> */}
      <S.Content>
        <S.NavBarContainer>
          <SideBar />
        </S.NavBarContainer>
        <S.CardsContainer>
          <section>{renderCards()}</section>
          <S.Pagination>
            <CaretCircleLeft size={32} color="#b1488a" onClick={previous} />
            <label>{page}</label>
            <DotsThreeOutline size={32} color="#b1488a" />
            <label>{cardData.length / 3}</label>
            <CaretCircleRight size={32} color="#b1488a" onClick={next} />
          </S.Pagination>
        </S.CardsContainer>
      </S.Content>
    </S.Container>
  );
}
