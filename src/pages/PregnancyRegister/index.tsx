import React from 'react';
import * as S from './styles';
import Logo from '../../assets/angelsLogo.svg';
import { Input } from '../../components/Input';
import { DateSelect } from '../../components/DateSelect';
import { Select } from '../../components/Select';
import { RadioSelect } from '../../components/RadioSelect';

export function PregnancyRegister() {
  const selectList = [
    {
      value: 'pré-natal de rotina',
      label: 'pré-natal de rotina'
    },
    {
      value: 'ocorrência',
      label: 'ocorrência'
    },
    {
      value: 'volta',
      label: 'volta'
    }
  ];

  return (
    <S.Container>
      <S.Content>
        <S.LogoContainer>
          <img src={Logo} alt="Angels Logo"></img>
        </S.LogoContainer>
        <S.FormContainer>
          <S.FirstRow>
            <DateSelect label="Data do acompanhamento"></DateSelect>
            <Input type="number" label="Peso atual" rightAdd="Kg"></Input>
            <Input type="number" label="Idade gestacional"></Input>
          </S.FirstRow>
          <S.FirstRow>
            <Input type="number" label="Batimento cardíaco do feto"></Input>
            <Input type="text" label="Pressão arterial"></Input>
            <Input type="number" label="Altura uterina"></Input>
          </S.FirstRow>
          <S.FirstRow>
            <Select label="Tipo" list={selectList}></Select>
            <RadioSelect
              label="Atendido por"
              firstOption="Médico"
              secondOption="Enfermeiro"
            ></RadioSelect>
          </S.FirstRow>
          <S.btn>Cadastrar</S.btn>
        </S.FormContainer>
      </S.Content>
    </S.Container>
  );
}
