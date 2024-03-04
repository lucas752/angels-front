import {
  CaretCircleLeft,
  CaretCircleRight,
  DotsThreeOutline,
  MagnifyingGlass,
  PlusCircle
} from '@phosphor-icons/react';
import { Button } from '../../components/Button/index.tsx';
import { Input } from '../../components/Input/index.tsx';
import * as S from './styles.ts';
import { PregnantCard } from '../../features/DashBoard/PregnantCard/index.tsx';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

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
      .slice(currentPage, currentPage + 9)
      .map((item) => (
        <PregnantCard
          name={item.name}
          weeks={item.weeks}
          status={item.status}
        />
      ));
  };

  const previous = () => {
    if (currentPage - 9 >= 0) {
      setCurrentPage(currentPage - 9);
      setPage((prev) => prev - 1);
    }
  };

  const next = () => {
    if (currentPage + 9 < cardData.length) {
      setCurrentPage(currentPage + 9);
      setPage((prev) => prev + 1);
    }
  };

  const pregnancyregisterScreen = () => {
    navigate('/pregnancyRegister');
  };

  return (
    <S.Container>
      <S.HeaderContent>
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
      </S.HeaderContent>
      {/* <S.Line>
        <Divider />
      </S.Line> */}
      <S.Content>
        <S.NavBarContainer>
          <div></div>
        </S.NavBarContainer>
        <S.CardsContainer>
          <section>{renderCards()}</section>
          <S.Pagination>
            <CaretCircleLeft size={32} color="#fff" onClick={previous} />
            <label>{page}</label>
            <DotsThreeOutline size={32} color="#fff" />
            <label>{cardData.length / 9}</label>
            <CaretCircleRight size={32} color="#fff" onClick={next} />
          </S.Pagination>
        </S.CardsContainer>
      </S.Content>
    </S.Container>
  );
}
