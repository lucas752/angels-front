import React, { useState } from 'react';
import * as S from './styles';
import Logo from '../../assets/angelsLogo.svg';
import { Input } from '../../components/Input';
import { DateSelect } from '../../components/DateSelect';
import { Select } from '../../components/Select';
import { RadioSelect } from '../../components/RadioSelect';
import { InputNumber, RadioChangeEvent, message } from 'antd';
import { PregnancyFollowUpType } from '../../services/types/PregnancyFollowUpType';
import { ZodError } from 'zod';

export function PregnancyFollowUp() {
  const [weight, setWeight] = useState<string>();
  const [weeks, setWeeks] = useState<string>();
  const [pressureS, setPressureS] = useState<number>();
  const [pressureD, setPressureD] = useState<number>();
  const [height, setHeight] = useState<string>();
  const [heartBeat, setHeartBeat] = useState<string>();
  const [radio, setRadio] = useState<number>();
  const [type, setType] = useState<string>();
  const [date, setDate] = useState<string | string[]>();

  interface ErrorInterface {
    errorShow?: boolean;
    errorType?: '' | 'error' | 'warning' | undefined;
  }

  const [heightError, setHeightError] = useState<ErrorInterface>({
    errorShow: false,
    errorType: ''
  });
  const [weeksError, setWeeksError] = useState<ErrorInterface>({
    errorShow: false,
    errorType: ''
  });

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

  const handleChangeWeight = (e: { target: { value: string } }) => {
    const { value } = e.target;
    setWeight(value);
  };

  const handleChangeWeeks = (e: { target: { value: string } }) => {
    const { value } = e.target;
    try {
      PregnancyFollowUpType.shape.weeks.parse(value);
      setWeeksError({ errorType: '', errorShow: false });
    } catch (error) {
      setWeeksError({ errorType: 'error', errorShow: true });
    }
    setWeeks(value);
  };
  const handleChangeHeartBeat = (e: { target: { value: string } }) => {
    const { value } = e.target;
    setHeartBeat(value);
  };

  const handleChangeHeight = (e: { target: { value: string } }) => {
    const { value } = e.target;
    try {
      PregnancyFollowUpType.shape.height.parse(value);
      setHeightError({ errorType: '', errorShow: false });
    } catch (error) {
      setHeightError({ errorType: 'error', errorShow: true });
    }
    setHeight(value);
  };

  const handlePregnancyFollowUp = () => {
    try {
      const data = {
        weight,
        weeks,
        pressureD,
        pressureS,
        heartBeat,
        height,
        type,
        date,
        radio
      };
      console.log(data);
      PregnancyFollowUpType.parse(data);
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
              inputFunction={handleChangeWeight}
            ></Input>
            <Input
              type="number"
              label="Idade gestacional"
              infoText="Insira o número de semanas"
              value={weeks}
              inputFunction={handleChangeWeeks}
            ></Input>
          </S.FirstRow>
          <S.FirstRow>
            <Input
              type="number"
              label="Batimento cardíaco do feto"
              value={heartBeat}
              optional={true}
              rightAdd="bpm"
              inputFunction={handleChangeHeartBeat}
            ></Input>
            <S.PressureDiv>
              <label htmlFor="">Pressão Arterial*</label>
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
              errorShow={heightError.errorShow}
              rightAdd="cm"
              inputFunction={handleChangeHeight}
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
          <S.btn onClick={handlePregnancyFollowUp}>Cadastrar</S.btn>
        </S.FormContainer>
      </S.Content>
    </S.Container>
  );
}
