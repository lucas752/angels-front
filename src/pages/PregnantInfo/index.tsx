import { useState } from 'react';
import { InfoContainer } from './components/InfoContainer';
import * as S from './styles';

import { ArrowLeft, ArrowRight } from '@phosphor-icons/react';

export default function PregnantInfo() {
  const [page, setPage] = useState(0);

  let pregnantInfo = {
    name: 'Júlia da Silva Santos',
    cpf: '123.456.789-09',
    birth: '15/04/1990',
    race: 'Parda',
    gender: 'Feminino',
    maritalStatus: 'Solteira',
    education: 'Superior Completo',
    headOfFamily: 'Sim',
    familyIncome: 'R$3.500,00',
    municipality: 'São Paulo',
    housing: 'Casa própria',
    electricity: 'Sim',
    sewerSystem: 'Sim',
    treatedWater: 'Sim',
    lastPregnancy: '20/02/2023',
    nourished: 'Sim',
    breastfeeding: 'Sim',
    contact: '(11) 98765-4321',
    emergencyContact: '(11) 91234-5678',
    liveChildren: '1',
    abortions: 'Nenhum',
    twins: 'Nenhum',
    stillbirths: 'Nenhum',
    liveBirths: '1',
    birthWeight_2500_4000g: '1',
    birthWeightLessThan2500g: 'Nenhum',
    birthWeightMoreThan4000g: 'Nenhum',
    deathsAfterFirstWeek: 'Nenhum',
    deathsInFirstWeek: 'Nenhum',
    diabetes: 'Não',
    pelvicSurgery: 'Não',
    totalDeliveries: '1',
    vaginalDeliveries: '1',
    cesareanDeliveries: 'Nenhum',
    urinaryInfection: 'Não',
    congenitalDeformity: 'Não',
    hypertension: 'Não',
    twinFamilyFistory: 'Não'
  };

  return (
    <S.Container>
      <S.ContentContainer>
        <S.Title>Informações da gestante</S.Title>
        {page == 0 ? (
          <S.ContentContainer>
            <S.LineContainer>
              <InfoContainer name="Nome" value={pregnantInfo.name} />
              <InfoContainer name="CPF" value={pregnantInfo.cpf} />
            </S.LineContainer>
            <S.LineContainer>
              <InfoContainer name="Nascimento" value={pregnantInfo.birth} />
              <InfoContainer name="Raça" value={pregnantInfo.race} />
              <InfoContainer name="Gênero" value={pregnantInfo.gender} />
              <InfoContainer
                name="Estado civil"
                value={pregnantInfo.maritalStatus}
              />
              <InfoContainer
                name="Escolaridade"
                value={pregnantInfo.education}
              />
            </S.LineContainer>
            <S.LineContainer>
              <InfoContainer
                name="Chefe de família"
                value={pregnantInfo.headOfFamily}
              />
              <InfoContainer
                name="Renda Familiar"
                value={pregnantInfo.familyIncome}
              />
            </S.LineContainer>
            <S.LineContainer>
              <InfoContainer
                name="Município"
                value={pregnantInfo.municipality}
              />
              <InfoContainer name="Moradia" value={pregnantInfo.housing} />
              <InfoContainer
                name="Eletricidade"
                value={pregnantInfo.electricity}
              />
              <InfoContainer
                name="Rede de esgoto"
                value={pregnantInfo.sewerSystem}
              />
              <InfoContainer
                name="Água tratada"
                value={pregnantInfo.treatedWater}
              />
            </S.LineContainer>
            <S.LineContainer>
              <InfoContainer
                name="Última gestação"
                value={pregnantInfo.lastPregnancy}
              />
              <InfoContainer name="Nutrida" value={pregnantInfo.nourished} />
              <InfoContainer
                name="Amamentação"
                value={pregnantInfo.breastfeeding}
              />
              <InfoContainer name="Contato" value={pregnantInfo.contact} />
              <InfoContainer
                name="Contato de emergência"
                value={pregnantInfo.emergencyContact}
              />
            </S.LineContainer>
          </S.ContentContainer>
        ) : (
          <S.ContentContainer>
            <S.LineContainer>
              <InfoContainer name="Abortos" value={pregnantInfo.abortions} />
              <InfoContainer
                name="Filhos Vivos"
                value={pregnantInfo.liveChildren}
              />
              <InfoContainer name="Gemelares" value={pregnantInfo.twins} />
              <InfoContainer
                name="Nascidos mortos"
                value={pregnantInfo.stillbirths}
              />
              <InfoContainer
                name="Nascidos vivos"
                value={pregnantInfo.liveBirths}
              />
            </S.LineContainer>
            <S.LineContainer>
              <InfoContainer
                name="RN peso entre 2500 e 4000"
                value={pregnantInfo.birthWeight_2500_4000g}
              />
              <S.InfoEmptyContainer />
              <InfoContainer
                name="RN peso menor que 2500"
                value={pregnantInfo.birthWeightLessThan2500g}
              />
              <S.InfoEmptyContainer />
              <InfoContainer
                name="RN peso maior que 4000"
                value={pregnantInfo.birthWeightMoreThan4000g}
              />
            </S.LineContainer>
            <S.LineContainer>
              <InfoContainer
                name="Óbitos após a primeira semana"
                value={pregnantInfo.deathsAfterFirstWeek}
              />
              <S.InfoEmptyContainer />
              <InfoContainer
                name="Óbitos na primeira semana"
                value={pregnantInfo.deathsInFirstWeek}
              />
              <S.InfoEmptyContainer />
              <S.InfoEmptyContainer />
            </S.LineContainer>
            <S.LineContainer>
              <InfoContainer name="Diabetes" value={pregnantInfo.diabetes} />
              <InfoContainer
                name="Cirurgia pélvica"
                value={pregnantInfo.pelvicSurgery}
              />
              <InfoContainer
                name="Partos"
                value={pregnantInfo.totalDeliveries}
              />
              <InfoContainer
                name="Partos vaginais"
                value={pregnantInfo.vaginalDeliveries}
              />
              <InfoContainer
                name="Partos cesários"
                value={pregnantInfo.cesareanDeliveries}
              />
            </S.LineContainer>
            <S.LineContainer>
              <InfoContainer
                name="Infecção urinária"
                value={pregnantInfo.urinaryInfection}
              />
              <InfoContainer
                name="Má formação congênita"
                value={pregnantInfo.congenitalDeformity}
              />
              <InfoContainer
                name="Hipertensão"
                value={pregnantInfo.hypertension}
              />
              <InfoContainer
                name="Familiar gêmeo"
                value={pregnantInfo.twinFamilyFistory}
              />
              <S.InfoEmptyContainer />
            </S.LineContainer>
          </S.ContentContainer>
        )}
        <S.ButtonContainer>
          {page == 1 ? (
            <S.ArrowButton onClick={() => setPage(0)}>
              <ArrowLeft size={28} weight="bold" />
            </S.ArrowButton>
          ) : (
            <S.ArrowButton onClick={() => setPage(1)}>
              <ArrowRight size={28} weight="bold" />
            </S.ArrowButton>
          )}
        </S.ButtonContainer>
      </S.ContentContainer>
    </S.Container>
  );
}
