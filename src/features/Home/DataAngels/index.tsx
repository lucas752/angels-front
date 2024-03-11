import * as S from "./styles";

export const DataAngels = () => {
    return (
      <S.Container>
        <S.DataWrapper id="data">
          <S.DataHeader>Informações</S.DataHeader>
        </S.DataWrapper>
        <S.DataGrid>
          <S.DataCard>
            <S.DataTitle>Mundo</S.DataTitle>
            <S.DataItem>
              <S.DataNumber>+1.900.000</S.DataNumber>
              <S.DataText>de gestações não foram concluídas devido a morte fetal em 2021.</S.DataText>
            </S.DataItem>
            <S.DataItem>
              <S.DataNumber>+2.300.000</S.DataNumber>
              <S.DataText>de crianças morreram nos primeiros 28 dias.</S.DataText>
            </S.DataItem>
          </S.DataCard>
          <S.DataCard>
            <S.DataTitle>Brasil</S.DataTitle>
            <S.DataItem>
              <S.DataNumber>+29.000</S.DataNumber>
              <S.DataText>de gestações não foram concluídas devido a morte fetal em 2021.</S.DataText>
            </S.DataItem>
            <S.DataItem>
              <S.DataNumber>+22.000</S.DataNumber>
              <S.DataText>de crianças morreram nos primeiros 28 dias.</S.DataText>
            </S.DataItem>
          </S.DataCard>
        </S.DataGrid>
      </S.Container>
    );
  };
