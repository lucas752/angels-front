import {
  CaretCircleLeft,
  CaretCircleRight,
  DotsThreeOutline,
  MagnifyingGlass
} from '@phosphor-icons/react';

import * as S from './styles.ts';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SideBar from '../../components/SideBar/index.tsx';
import { PregnancyCard } from '../../components/PregnancyCard/index.tsx';
import { useData } from '../../config/Data/UseData.ts';
import moment from 'moment';
import { Empty } from 'antd';
import { Input } from '../../components/Input/index.tsx';
import { Button } from '../../components/Button/index.tsx';

export function Dashboard() {
  const { pregnanciesList } = useData();
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState<number>(0);
  const [page, setPage] = useState<number>(1);
  const [searchName, setSearchName] = useState<string>('');

  const handleChangeName = (e: { target: { value: string } }) => {
    const { value } = e.target;
    setSearchName(value);
  };

  const filteredList = pregnanciesList.filter(
    (item) =>
      item.gestante?.nome &&
      item.gestante?.nome.toLowerCase().includes(searchName.toLowerCase())
  );

  const renderCards = () => {
    const currentDate = moment();

    return filteredList
      .slice(currentPage, currentPage + 3)
      .map((item, index) => (
        <PregnancyCard
          key={index}
          id={1}
          pregnantName={item.gestante?.nome}
          weeks={currentDate.diff(item.dataInicioGestacao, 'weeks').toString()}
          gestationalRisk={true}
          pregnancyStatus={item.situacaoGestacional}
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
    if (currentPage + 3 < filteredList.length) {
      setCurrentPage(currentPage + 3);
      setPage((prev) => prev + 1);
    }
  };

  const handleCleanSearch = () => {
    setSearchName('');
  };
  return (
    <S.Container>
      <S.Content>
        <S.NavBarContainer>
          <SideBar />
        </S.NavBarContainer>
        <S.CardsContainer>
          <S.InputContainer>
            {searchName !== '' && (
              <Button
                label="Limpar filtro"
                buttonFunction={handleCleanSearch}
                shape="round"
              />
            )}
            {pregnanciesList.length > 0 && (
              <Input
                inputFunction={handleChangeName}
                placeHolder="Digite o nome da gestante..."
                value={searchName}
                rightAdd={<MagnifyingGlass size={24} color="#b1488a" />}
                color="#b1488a"
              />
            )}
          </S.InputContainer>

          {filteredList.length > 0 ? (
            <S.Cards>{renderCards()}</S.Cards>
          ) : (
            <S.EmptyBox
              image={Empty.PRESENTED_IMAGE_SIMPLE}
              description="Sem gestações cadastradas"
            />
          )}

          {filteredList.length >= 4 && (
            <S.Pagination>
              <CaretCircleLeft size={32} color="#b1488a" onClick={previous} />
              <label>{page}</label>
              <DotsThreeOutline size={32} color="#b1488a" />
              <label>{Math.ceil(filteredList.length / 3)}</label>
              <CaretCircleRight size={32} color="#b1488a" onClick={next} />
            </S.Pagination>
          )}
        </S.CardsContainer>
      </S.Content>
    </S.Container>
  );
}
