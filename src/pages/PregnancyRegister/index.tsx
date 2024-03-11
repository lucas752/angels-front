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
import { postGestacao } from '../../services/PregnancyRegisterService/index.ts';
import { PregnancyRegisterInterface } from '../../services/PregnancyRegisterService/interface.ts';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { Button } from '../../components/Button/index.tsx';
import { ArrowUUpLeft } from '@phosphor-icons/react';

export default function PregnancyRegister() {
  const navigate = useNavigate();
  const params = useParams();
  const gestanteId = Number(params.id);

  const [period, setPeriod] = useState<string | string[]>();
  const [beginning, setBeginning] = useState<string | string[]>();
  const [weight, setWeight] = useState<string>('');
  const [situation, setSituation] = useState<string>('');
  const [risc, setRisc] = useState<string>('');
  const [blood, setBlood] = useState<string>('');
  const [rh, setRh] = useState<string>('');
  const [hepB, setHepB] = useState<boolean>();
  const [drugs, setDrugs] = useState<string>('');
  const [smoke, setSmoke] = useState<boolean>();
  const [alcohol, setAlcohol] = useState<boolean>();
  const [planned, setPlanned] = useState<boolean>();
  const [alcoholFrequency, setAlcoholFrequency] = useState<string>('0');
  const [numberCigarettes, setNumberCigarettes] = useState<string>('0');

  interface ErrorInterface {
    errorShow?: boolean;
    errorType?: '' | 'error' | 'warning' | undefined;
  }

  const [errorPeriod, setErrorPeriod] = useState<ErrorInterface>({
    errorType: '',
    errorShow: false
  });

  const [errorBeginning, setErrorBeginning] = useState<ErrorInterface>({
    errorType: '',
    errorShow: false
  });
  const [errorWeight, setErrorWeight] = useState<ErrorInterface>({
    errorType: '',
    errorShow: false
  });

  const alcoolFreq = [
    {
      value: '0',
      label: 'Baixo consumo de álcool'
    },
    {
      value: '1',
      label: 'Leve consumo de álcool'
    },
    {
      value: '2',
      label: 'Moderado consumo de álcool'
    },
    {
      value: '3',
      label: 'Alto consumo de álcool'
    }
  ];
  const drugsUse = [
    {
      value: '0',
      label: 'Nenhum consumo de drogas'
    },
    {
      value: '1',
      label: 'Baixo consumo de drogas'
    },
    {
      value: '2',
      label: 'Moderado consumo de drogas'
    },
    {
      value: '3',
      label: 'Alto consumo de drogas'
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
      value: '0',
      label: 'O'
    },
    {
      value: '1',
      label: 'A'
    },
    {
      value: '2',
      label: 'B'
    },
    {
      value: '3',
      label: 'AB'
    }
  ];

  const handleChangeDatePeriod = (
    date: unknown,
    dateString: string | string[]
  ) => {
    try {
      PregnancyRegisterSchema.shape.dataUltimaMenstruacao.parse(dateString);
      setErrorPeriod({ errorType: '', errorShow: false });
      if (dateString == '') {
        setErrorPeriod({ errorType: 'error', errorShow: true });
      }
    } catch (error) {
      setErrorPeriod({ errorType: 'error', errorShow: true });
    }
    setPeriod(dateString);
  };

  const handleChangeDateBeginning = (
    date: unknown,
    dateString: string | string[]
  ) => {
    try {
      PregnancyRegisterSchema.shape.dataInicioGestacao.parse(dateString);
      setErrorBeginning({ errorType: '', errorShow: false });
      if (dateString == '') {
        setErrorBeginning({ errorType: 'error', errorShow: true });
      }
    } catch (error) {
      setErrorBeginning({ errorType: 'error', errorShow: true });
    }
    setBeginning(dateString);
  };
  const handleChangeWeight = (e: { target: { value: string } }) => {
    const { value } = e.target;
    try {
      PregnancyRegisterSchema.shape.pesoAntesGestacao.parse(parseInt(value));
      setErrorWeight({ errorType: '', errorShow: false });
    } catch (error) {
      setErrorWeight({ errorType: 'error', errorShow: true });
    }
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

  const handleChangeDrugs = (value: unknown) => {
    if (typeof value === 'string') {
      setDrugs(value);
    }
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

  const handleBackArrow = () => {
    navigate('/dashboard');
  };

  const handlePregnancyRegister = () => {
    try {
      const data: PregnancyRegisterInterface = {
        gestanteId: gestanteId,
        dataUltimaMenstruacao: period,
        dataInicioGestacao: beginning,
        pesoAntesGestacao: parseInt(weight),
        situacaoGestacional: parseInt(situation),
        riscoGestacional: parseInt(risc),
        grupoSanguineo: parseInt(blood),
        fatorRh: rh,
        vacinaHepatiteB: hepB,
        usoDrogas: parseInt(drugs),
        fuma: smoke,
        gravidezPlanejada: planned,
        consumoAlcool: alcohol,
        frequenciaUsoAlcool: parseInt(alcoholFrequency),
        quantidadeCigarrosDia: parseInt(numberCigarettes)
      };
      PregnancyRegisterSchema.parse(data);
      postGestacao(gestanteId, data).then((resp) => {
        navigate(`/pregnancies/${gestanteId}`);
      });
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
        <S.NavContainer>
          <ArrowUUpLeft size={22} color="#B1488A" onClick={handleBackArrow} />
          <S.LogoContainer>
            <img src={Logo} alt="Angels Logo"></img>
          </S.LogoContainer>
        </S.NavContainer>
        <S.FormContainer>
          <S.FirstRow>
            <DateSelect
              label="Data da última menstruação"
              inputFunction={handleChangeDatePeriod}
              status={errorPeriod.errorType}
            ></DateSelect>
            <DateSelect
              label="Data de início da gestação"
              inputFunction={handleChangeDateBeginning}
              status={errorBeginning.errorType}
            ></DateSelect>
            <Input
              label="Peso anterior a gestação"
              value={weight}
              inputFunction={handleChangeWeight}
              rightAdd="Kg"
              type="number"
              errorShow={errorWeight.errorShow}
              status={errorWeight.errorType}
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
              firstValue={'+'}
              secondValue={'-'}
              value={rh}
              radioFunction={handleChangeRh}
            ></RadioSelect>
          </S.FirstRow>
          <S.FirstRow>
            <Select
              list={drugsUse}
              label="Frequência do uso de drogas"
              defaut="Selecione a frequencia de uso"
              selectFunc={handleChangeDrugs}
            ></Select>
            <RadioSelect
              label="Gravidez planejada"
              firstOption="sim"
              secondOption="não"
              firstValue={true}
              secondValue={false}
              value={planned}
              radioFunction={handleChangePlanned}
            ></RadioSelect>
            <RadioSelect
              label="Vacina hepatite b"
              firstOption="sim"
              secondOption="não"
              firstValue={true}
              secondValue={false}
              value={hepB}
              radioFunction={handleChangeHepB}
            ></RadioSelect>
            <RadioSelect
              label="Fumante"
              firstOption="sim"
              secondOption="não"
              firstValue={true}
              secondValue={false}
              radioFunction={handleChangeSmoke}
              value={smoke}
            ></RadioSelect>
            <RadioSelect
              label="Consumo de álcool"
              firstOption="sim"
              secondOption="não"
              firstValue={true}
              secondValue={false}
              radioFunction={handleChangeAlcohol}
              value={alcohol}
            ></RadioSelect>
          </S.FirstRow>
          <S.FirstRow>
            {smoke && (
              <Input
                label="Quantidade de cigarro por dia"
                type="number"
                optional={true}
                value={numberCigarettes}
                inputFunction={handleCigarettes}
              ></Input>
            )}
            {alcohol && (
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
