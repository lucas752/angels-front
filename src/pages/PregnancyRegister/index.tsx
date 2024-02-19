import React, { useState } from 'react';
import * as S from './styles';
import Logo from '../../assets/angelsLogo.svg';
import { Input } from '../../components/Input';
import { DateSelect } from '../../components/DateSelect';
import { Select } from '../../components/Select';
import { RadioSelect } from '../../components/RadioSelect';
import { DatePickerProps, RadioChangeEvent } from 'antd';

export function PregnancyRegister() {
  const [weight, setWeigth] = useState<string>();
  const [age, setAge] = useState<string>();
  const [pressure, setPressure] = useState<string>();
  const [height, setHeigth] = useState<string>();
  const [heartBeat, setHeartBeat] = useState<string>();
  const [radio, setRadio] = useState<number>();
  const [date, setDate] = useState<string | string[]>();

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
  const dateOnChange: DatePickerProps['onChange'] = (date, dateString) => {
    setDate(dateString);
  };

  const radioOnChange = (e: RadioChangeEvent) => {
    setRadio(e.target.value);
  };

  return (
    <S.Container>
      <S.Content>
        <S.LogoContainer>
          <img src={Logo} alt="Angels Logo"></img>
        </S.LogoContainer>
        <S.FormContainer>
          <S.FirstRow>
            <DateSelect
              label="Data do acompanhamento"
              inputFunction={dateOnChange}
            ></DateSelect>
            <Input
              type="number"
              label="Peso atual"
              rightAdd="Kg"
              value={weight}
              inputFunction={(e) => {
                setWeigth(e.target.value);
              }}
            ></Input>
            <Input
              type="number"
              label="Idade gestacional"
              value={age}
              inputFunction={(e) => {
                setAge(e.target.value);
              }}
            ></Input>
          </S.FirstRow>
          <S.FirstRow>
            <Input
              type="number"
              label="Batimento cardíaco do feto"
              value={heartBeat}
              inputFunction={(e) => {
                setHeartBeat(e.target.value);
              }}
            ></Input>
            <Input
              type="text"
              label="Pressão arterial"
              value={pressure}
              inputFunction={(e) => {
                setPressure(e.target.value);
              }}
            ></Input>
            <Input
              type="number"
              label="Altura uterina"
              value={height}
              inputFunction={(e) => {
                setHeigth(e.target.value);
              }}
            ></Input>
          </S.FirstRow>
          <S.FirstRow>
            <Select label="Tipo" list={selectList}></Select>
            <RadioSelect
              label="Atendido por"
              firstOption="Médico"
              firstValue={1}
              secondValue={2}
              secondOption="Enfermeiro"
              value={radio}
              radioFunction={radioOnChange}
            ></RadioSelect>
          </S.FirstRow>
          <S.btn>Cadastrar</S.btn>
        </S.FormContainer>
      </S.Content>
    </S.Container>
  );
}
