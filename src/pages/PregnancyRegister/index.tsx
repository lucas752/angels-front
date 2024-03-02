import React, { useState } from 'react';
import * as S from './styles';
import Logo from '../../assets/angelsLogo.svg';
import { Input } from '../../components/Input';
import { DateSelect } from '../../components/DateSelect';
import { Select } from '../../components/Select';
import { RadioSelect } from '../../components/RadioSelect';
import { InputNumber, RadioChangeEvent, message } from 'antd';
import { PregnancyRegisterType } from '../../services/types/PregnancyRegister';
import { ZodError } from 'zod';

export function PregnancyRegister() {
  const [weight, setWeight] = useState<string>();
  const [age, setAge] = useState<string>();
  const [pressureS, setPressureS] = useState<number>();
  const [pressureD, setPressureD] = useState<number>();
  const [height, setHeigth] = useState<string>();
  const [heartBeat, setHeartBeat] = useState<string>();
  const [radio, setRadio] = useState<number>();
  const [type, setType] = useState<string>();
  const [date, setDate] = useState<string | string[]>();

  const selectList = [
    {
      value: 'pré-natal de rotina',
      label: 'Pré-natal de rotina'
    },
    {
      value: 'ocorrência',
      label: 'Ocorrência'
    },
    {
      value: 'volta',
      label: 'Volta'
    }
  ];

  const handleChangeDate = (date: unknown, dateString: string | string[]) => {
    setDate(dateString);
  };

  const radioOnChange = (e: RadioChangeEvent) => {
    setRadio(e.target.value);
  };

  const handleChangeType = (value: unknown) => {
    if (typeof value === 'string') {
      setType(value);
    }
  };

  const handleChangePressureD = (value: number | null) => {
    if (typeof value === 'number') {
      setPressureD(value);
    }
  };
  const handleChangePressureS = (value: number | null) => {
    if (typeof value === 'number') {
      setPressureS(value);
    }
  };

  const handlePregnancyRegister = () => {
    try {
      const data = {
        weight,
        age,
        pressureD,
        pressureS,
        heartBeat,
        height,
        type,
        date,
        radio
      };
      console.log(data);
      PregnancyRegisterType.parse(data);
    } catch (error) {
      if (error instanceof ZodError) {
        console.log(error);
        message.error(error.issues[0].message);
      }
    }
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
              inputFunction={handleChangeDate}
            ></DateSelect>
            <Input
              type="number"
              label="Peso atual"
              rightAdd="Kg"
              value={weight}
              inputFunction={(e) => {
                setWeight(e.target.value);
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
              rightAdd="bpm"
              inputFunction={(e) => {
                setHeartBeat(e.target.value);
              }}
            ></Input>
            <S.PressureDiv>
              <label htmlFor="">Pressão Arterial</label>
              <S.InputAreaP>
                <InputNumber
                  type="number"
                  placeholder="mmHg"
                  value={pressureS}
                  onChange={handleChangePressureS}
                ></InputNumber>
                <p>/</p>
                <InputNumber
                  type="number"
                  placeholder="mmHg"
                  value={pressureD}
                  onChange={handleChangePressureD}
                ></InputNumber>
              </S.InputAreaP>
            </S.PressureDiv>
            <Input
              type="number"
              label="Altura uterina"
              value={height}
              rightAdd="cm"
              inputFunction={(e) => {
                setHeigth(e.target.value);
              }}
            ></Input>
          </S.FirstRow>
          <S.FirstRow>
            <Select
              label="Tipo"
              defaut="Tipo de gestação"
              list={selectList}
              selectFunc={handleChangeType}
            ></Select>
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
          <S.btn onClick={handlePregnancyRegister}>Cadastrar</S.btn>
        </S.FormContainer>
      </S.Content>
    </S.Container>
  );
}
