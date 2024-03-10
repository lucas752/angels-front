import React, { useState } from 'react';
import * as S from './styles';
import Logo from '../../assets/angelsLogo.svg';
import { Input } from '../../components/Input';
import { DateSelect } from '../../components/DateSelect';
import { Select } from '../../components/Select';
import { RadioSelect } from '../../components/RadioSelect';
import { InputNumber, RadioChangeEvent, message } from 'antd';
import { PregnancyFollowUpSchema } from '../../services/types/PregnancyFollowUpType';
import { ZodError } from 'zod';
import { postAcompanhamento } from '../../services/PregnancyFollowUpService';
import { FollowUpInterface } from '../../services/PregnancyFollowUpService/interface';

export function PregnancyFollowUp() {
  const [weight, setWeight] = useState<string>();
  const [weeks, setWeeks] = useState<string>();
  const [pressureS, setPressureS] = useState<string>();
  const [pressureD, setPressureD] = useState<string>();
  const [height, setHeight] = useState<string>();
  const [heartBeat, setHeartBeat] = useState<string>();
  const [radio, setRadio] = useState<string>();
  const [type, setType] = useState<string>();
  const [date, setDate] = useState<string | string[]>();

  interface ErrorInterface {
    errorShow?: boolean;
    errorType?: '' | 'error' | 'warning' | undefined;
  }

  const [weightError, setWeightError] = useState<ErrorInterface>({
    errorShow: false,
    errorType: ''
  });
  const [weeksError, setWeeksError] = useState<ErrorInterface>({
    errorShow: false,
    errorType: ''
  });
  const [dateError, setDateError] = useState<ErrorInterface>({
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
    try {
      PregnancyFollowUpSchema.shape.dataAcompanhamento.parse(dateString);
      setDateError({ errorType: '', errorShow: false });
      if (dateString == '') {
        setDateError({ errorType: 'error', errorShow: true });
      }
    } catch (error) {
      setDateError({ errorType: 'error', errorShow: true });
    }
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

  const handleChangePressureD = (value: string | null) => {
    if (typeof value === 'number') {
      setPressureD(String(value));
    }
  };
  const handleChangePressureS = (value: string | null) => {
    if (typeof value === 'number') {
      setPressureS(String(value));
    }
    console.log(pressureS);
  };

  const handleChangeWeight = (e: { target: { value: string } }) => {
    const { value } = e.target;
    try {
      PregnancyFollowUpSchema.shape.pesoAtual.parse(value);
      setWeightError({ errorType: '', errorShow: false });
    } catch (error) {
      setWeightError({ errorType: 'error', errorShow: true });
    }
    setWeight(value);
  };

  const handleChangeWeeks = (e: { target: { value: string } }) => {
    const { value } = e.target;
    try {
      PregnancyFollowUpSchema.shape.idadeGestacional.parse(value);
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
    setHeight(value);
  };

  const handlePregnancyFollowUp = () => {
    let pressure = '';
    if (typeof pressureD === 'string' && typeof pressureS === 'string') {
      pressure = pressureD + '/' + pressureS;
    }
    try {
      const data: FollowUpInterface = {
        gestanteId: 1,
        pesoAtual: weight,
        idadeGestacional: weeks,
        pressaoArterial: pressure,
        batimentosCardiacosFeto: heartBeat,
        alturaUterina: height,
        tipo: type,
        dataAcompanhamento: date,
        realizadoPor: radio
      };
      console.log(data);
      PregnancyFollowUpSchema.parse(data);
      postAcompanhamento(1, data);
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
              status={dateError.errorType}
            ></DateSelect>
            <Input
              type="number"
              label="Peso atual"
              rightAdd="Kg"
              value={weight}
              inputFunction={handleChangeWeight}
              status={weightError.errorType}
              errorShow={weightError.errorShow}
            ></Input>
            <Input
              type="number"
              label="Idade gestacional"
              infoText="Insira o número de semanas"
              value={weeks}
              inputFunction={handleChangeWeeks}
              status={weeksError.errorType}
              errorShow={weeksError.errorShow}
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
              optional={true}
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
              firstValue={'médico'}
              secondValue={'enfermeiro'}
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
