import React, { useState } from 'react';
import * as S from './styles.ts';
import Logo from '../../assets/angelsLogo.svg';
import { Select } from '../../components/Select/index.tsx';
import { Input } from '../../components/Input/index.tsx';
import { RadioSelect } from '../../components/RadioSelect/index.tsx';
import { DateSelect } from '../../components/DateSelect/index.tsx';
import { RadioChangeEvent } from 'antd';
import { PregnancyRegisterSchema } from '../../services/types/PregnancyRegisterType.ts';
import { ZodError } from 'zod';
import { errorNotification } from '../../components/Notification/index.ts';

export default function PregnancyRegister() {
  const [period, setPeriod] = useState<string | string[]>();
  const [begining, setBegining] = useState<string | string[]>();
  const [weight, setWeight] = useState<string>();
  const [situation, setSituation] = useState<string>();
  const [risc, setRisc] = useState<string>();
  const [blood, setBlood] = useState<string>();
  const [rh, setRh] = useState<number>();
  const [hepB, setHepB] = useState<number>();
  const [drugs, setDrugs] = useState<number>();
  const [smoke, setSmoke] = useState<number>();
  const [alcohol, setAlcohol] = useState<number>();
  const [planned, setPlanned] = useState<number>();
  const [alcoholFrequency, setAlcoholFrequency] = useState<string>();
  const [numberCigarettes, setNumberCigarettes] = useState<string>();

  const alcoolFreq = [
    {
      value: '1',
      label: 'Baixo consumo de álcool'
    },
    {
      value: '2',
      label: 'Leve consumo de álcool'
    },
    {
      value: '3',
      label: 'Moderado consumo de álcool'
    },
    {
      value: '4',
      label: 'Alto consumo de álcool'
    }
  ];

  const riscoGest = [
    {
      value: '0',
      label: 'Alto'
    },
    {
      value: '1',
      label: 'Habitual'
    },
    {
      value: '2',
      label: 'Não informado'
    }
  ];

  const situGest = [
    {
      value: '0',
      label: 'Em andamento'
    },
    {
      value: '1',
      label: 'Finalizada com sucesso'
    },
    {
      value: '2',
      label: 'Finalizada com desfecho negativo'
    }
  ];

  const gpSang = [
    {
      value: 'A',
      label: 'A'
    },
    {
      value: 'B',
      label: 'B'
    },
    {
      value: 'AB',
      label: 'AB'
    },
    {
      value: 'O',
      label: 'O'
    }
  ];

  const handleChangeDatePeriod = (
    date: unknown,
    dateString: string | string[]
  ) => {
    setPeriod(dateString);
  };

  const handleChangeDateBegining = (
    date: unknown,
    dateString: string | string[]
  ) => {
    setBegining(dateString);
  };
  const handleChangeWeight = (e: { target: { value: string } }) => {
    const { value } = e.target;
    setWeight(value);
  };

  const handleChangeSituation = (value: unknown) => {
    if (typeof value === 'string') {
      setSituation(value);
    }
  };

  const handleChangePlanned = (e: RadioChangeEvent) => {
    setPlanned(e.target.value);
  };
  const handleChangeBlood = (value: unknown) => {
    if (typeof value === 'string') {
      setBlood(value);
    }
  };

  const handleChangeRh = (e: RadioChangeEvent) => {
    setRh(e.target.value);
  };

  const handleChangeHepB = (e: RadioChangeEvent) => {
    setHepB(e.target.value);
  };
  const handleChangeRisc = (value: unknown) => {
    if (typeof value === 'string') {
      setRisc(value);
    }
  };

  const handleChangeDrugs = (e: RadioChangeEvent) => {
    setDrugs(e.target.value);
  };
  const handleChangeSmoke = (e: RadioChangeEvent) => {
    setSmoke(e.target.value);
  };
  const handleChangeAlcohol = (e: RadioChangeEvent) => {
    setAlcohol(e.target.value);
  };

  const handleAlcoholFreq = (value: unknown) => {
    if (typeof value === 'string') {
      setAlcoholFrequency(value);
    }
  };
  const handleCigarettes = (e: { target: { value: string } }) => {
    const { value } = e.target;
    setNumberCigarettes(value);
  };
  const handlePregnancyRegister = () => {
    try {
      const data = {
        period,
        begining,
        weight,
        situation,
        risc,
        blood,
        rh,
        hepB,
        drugs,
        smoke,
        planned,
        alcohol,
        alcoholFrequency,
        numberCigarettes
      };
      console.log(data);
      PregnancyRegisterSchema.parse(data);
    } catch (error) {
      if (error instanceof ZodError) {
        console.log(error);
        errorNotification(error.issues[0].message);
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
              label="Data da última menstruação"
              inputFunction={handleChangeDatePeriod}
            ></DateSelect>
            <DateSelect
              label="Data de início da gestação"
              inputFunction={handleChangeDateBegining}
            ></DateSelect>
            <Input
              label="Peso anterior a gestação"
              value={weight}
              inputFunction={handleChangeWeight}
              rightAdd="Kg"
              type="number"
            ></Input>
          </S.FirstRow>
          <S.FirstRow>
            <Select
              label="Situação gestacional"
              defaut="Selecione a situação gestacional"
              list={situGest}
              selectFunc={handleChangeSituation}
            ></Select>
            <Select
              label="Risco gestacional"
              list={riscoGest}
              defaut="Selecione o risco"
              selectFunc={handleChangeRisc}
            ></Select>
            <Select
              label="Grupo sanguíneo"
              list={gpSang}
              defaut="Grupo sanguíneo"
              selectFunc={handleChangeBlood}
            ></Select>
            <RadioSelect
              label="Fator RH"
              firstOption="+"
              secondOption="-"
              firstValue={1}
              secondValue={2}
              value={rh}
              radioFunction={handleChangeRh}
            ></RadioSelect>
          </S.FirstRow>
          <S.FirstRow>
            <RadioSelect
              label="Gravidez planejada"
              firstOption="sim"
              secondOption="não"
              firstValue={1}
              secondValue={2}
              value={planned}
              radioFunction={handleChangePlanned}
            ></RadioSelect>
            <RadioSelect
              label="Vacina hepatite b"
              firstOption="sim"
              secondOption="não"
              firstValue={1}
              secondValue={2}
              value={hepB}
              radioFunction={handleChangeHepB}
            ></RadioSelect>
            <RadioSelect
              label="Consumo de drogas"
              firstOption="sim"
              secondOption="não"
              firstValue={1}
              secondValue={2}
              radioFunction={handleChangeDrugs}
              value={drugs}
            ></RadioSelect>
            <RadioSelect
              label="Fumante"
              firstOption="sim"
              secondOption="não"
              firstValue={1}
              secondValue={2}
              radioFunction={handleChangeSmoke}
              value={smoke}
            ></RadioSelect>
            <RadioSelect
              label="Consumo de álcool"
              firstOption="sim"
              secondOption="não"
              firstValue={1}
              secondValue={2}
              radioFunction={handleChangeAlcohol}
              value={alcohol}
            ></RadioSelect>
          </S.FirstRow>
          <S.FirstRow>
            {smoke == 1 && (
              <Input
                label="Quantidade de cigarro por dia"
                type="number"
                optional={true}
                value={numberCigarettes}
                inputFunction={handleCigarettes}
              ></Input>
            )}
            {alcohol == 1 && (
              <Select
                list={alcoolFreq}
                label="Frequência do uso de álcool"
                defaut="Selecione a frequencia de uso"
                optional={true}
                selectFunc={handleAlcoholFreq}
              ></Select>
            )}
          </S.FirstRow>
          <S.btn onClick={handlePregnancyRegister}>Cadastrar</S.btn>
        </S.FormContainer>
      </S.Content>
    </S.Container>
  );
}
