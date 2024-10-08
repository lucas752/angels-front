import * as S from './styles';
import Logo from '../../assets/angelsLogo.svg';
import { Input } from '../../components/Input';
import { Select } from '../../components/Select';
import { DateSelect } from '../../components/DateSelect';
import { RadioSelect } from '../../components/RadioSelect';
import { Button } from '../../components/Button';
import { ArrowLeft, ArrowRight, ArrowUUpLeft } from '@phosphor-icons/react';
import { useEffect, useState } from 'react';
import { RadioChangeEvent } from 'antd';
import {
  PregnantInterface,
  pregnantSchemaPartOne,
  pregnantSchemaPartTwo,
  pregnantSchemaPartTwoFirstPregnant
} from '../../services/types/PregnantType';
import { ZodError } from 'zod';
import {
  successNotification,
  warningNotification
} from '../../components/Notification';
import { InputMask } from '../../features/PregnantRegister/InputMask';
import {
  educationLevelsList,
  genderList,
  housingTypesList,
  malnutritionLevelsList,
  maritalStatusList,
  raceList
} from '../../features/PregnantRegister/SelectOptions';
import {
  GetPregnantEvolutionData,
  PostPregnant,
  PostPregnantEvolutionData
} from '../../services/PregnantServices';
import { useNavigate, useParams } from 'react-router-dom';
import moment from 'moment';

interface ErrorInterface {
  errorShow?: boolean;
  errorType?: '' | 'error' | 'warning' | undefined;
}

export function PregnantRegister() {
  const params = useParams();
  const navigate = useNavigate();

  const [progress, setProgress] = useState<boolean>(false);
  const [progressBar, setProgressBar] = useState<number>(0);
  const [name, setName] = useState<string>('');
  const [birthDate, setBirthDate] = useState<string | string[]>();
  const [race, setRace] = useState<string>('');
  const [gender, setGender] = useState<string>('');
  const [cpf, setCpf] = useState<string>('');
  const [headOfHousehold, setHeadOfHousehold] = useState<boolean>();
  const [risc, setRisc] = useState<boolean>();
  const [maritalStatus, setMaritalStatus] = useState<string>('');
  const [educationLevel, setEducationLevel] = useState<string>('');
  const [familyIncome, setFamilyIncome] = useState<string>('');
  const [city, setCity] = useState<string>('');
  const [housing, setHousing] = useState<string>('');
  const [electricity, setElectricity] = useState<boolean>();
  const [sewageNetwork, setSewageNetwork] = useState<boolean>();
  const [treatedWater, setTreatedWater] = useState<boolean>();
  const [firstPregnant, setFirstPregnant] = useState<number>();
  const [lastPregnancyDate, setLastPregnancyDate] = useState<
    string | string[]
  >();
  const [wellFed, setWellFed] = useState<string>('');
  const [breastfeeding, setBreastfeeding] = useState<boolean>();
  const [contact, setContact] = useState<string>('');
  const [emergencyContact, setEmergencyContact] = useState<string>('');

  //segunda parte
  const [abortions, setAbortions] = useState<string>('');
  const [liveChildren, setLiveChildren] = useState<string>('');
  const [twins, setTwins] = useState<string>('');
  const [liveBirths, setLiveBirths] = useState<string>('');
  const [stillbirths, setStillbirths] = useState<string>('');
  const [birthWeight25004000, setBirthWeight25004000] = useState<string>('');
  const [birthWeightlt2500, setBirthWeightlt2500] = useState<string>('');
  const [birthWeightgt4000, setBirthWeightgt4000] = useState<string>('');
  const [deathsFirstWeek, setDeathsFirstWeek] = useState<string>('');
  const [deathsAfterFirstWeek, setDeathsAfterFirstWeek] = useState<string>('');
  const [diabetes, setDiabetes] = useState<boolean>();
  const [pelvicSurgery, setPelvicSurgery] = useState<boolean>();
  const [deliveries, setDeliveries] = useState<string>('');
  const [vaginalDeliveries, setVaginalDeliveries] = useState<string>('');
  const [cesareanDeliveries, setCesareanDeliveries] = useState<string>('');
  const [urinaryInfection, setUrinaryInfection] = useState<boolean>();
  const [congenitalMalformation, setCongenitalMalformation] =
    useState<boolean>();
  const [hypertension, setHypertension] = useState<boolean>();
  const [twinFamilyHistory, setTwinFamilyHistory] = useState<boolean>();

  //disable filds
  const [blockName, setBlockName] = useState<boolean>(false);
  const [blockBirth, setBlockBirth] = useState<boolean>(false);
  const [blockRace, setBlockRace] = useState<boolean>(false);
  const [blockGender, setBlockGender] = useState<boolean>(false);
  const [blockCpf, setBlockCpf] = useState<boolean>(false);
  const [blockFirstPregnancy, setBlockFirstPregnancy] =
    useState<boolean>(false);

  //error states
  const [errorName, setErrorName] = useState<ErrorInterface>({
    errorType: '',
    errorShow: false
  });

  const [errorBirthDate, setErrorBirthDate] = useState<ErrorInterface>({
    errorType: '',
    errorShow: false
  });

  const [errorCpf, setErrorCpf] = useState<ErrorInterface>({
    errorType: '',
    errorShow: false
  });

  const [errorFamilyIncome, setErrorFamilyIncome] = useState<ErrorInterface>({
    errorType: '',
    errorShow: false
  });

  const [errorCity, setErrorCity] = useState<ErrorInterface>({
    errorType: '',
    errorShow: false
  });

  const [errorLastPregnancyDate, setErrorLastPregnancyDate] =
    useState<ErrorInterface>({
      errorType: '',
      errorShow: false
    });

  const [errorContact, setErrorContact] = useState<ErrorInterface>({
    errorType: '',
    errorShow: false
  });

  const [errorEmergencyContact, setErrorEmergencyContact] =
    useState<ErrorInterface>({
      errorType: '',
      errorShow: false
    });

  // Segunda parte

  const [errorAbortions, setErrorAbortions] = useState<ErrorInterface>({
    errorType: '',
    errorShow: false
  });

  const [errorLiveChildren, setErrorLiveChildren] = useState<ErrorInterface>({
    errorType: '',
    errorShow: false
  });

  const [errorTwins, setErrorTwins] = useState<ErrorInterface>({
    errorType: '',
    errorShow: false
  });

  const [errorLiveBirths, setErrorLiveBirths] = useState<ErrorInterface>({
    errorType: '',
    errorShow: false
  });

  const [errorStillbirths, setErrorStillbirths] = useState<ErrorInterface>({
    errorType: '',
    errorShow: false
  });

  const [errorBirthWeight25004000, setErrorBirthWeight25004000] =
    useState<ErrorInterface>({
      errorType: '',
      errorShow: false
    });

  const [errorBirthWeightlt2500, setErrorBirthWeightlt2500] =
    useState<ErrorInterface>({
      errorType: '',
      errorShow: false
    });

  const [errorBirthWeightgt4000, setErrorBirthWeightgt4000] =
    useState<ErrorInterface>({
      errorType: '',
      errorShow: false
    });

  const [errorDeathsFirstWeek, setErrorDeathsFirstWeek] =
    useState<ErrorInterface>({
      errorType: '',
      errorShow: false
    });

  const [errorDeathsAfterFirstWeek, setErrorDeathsAfterFirstWeek] =
    useState<ErrorInterface>({
      errorType: '',
      errorShow: false
    });

  const [errorDeliveries, setErrorDeliveries] = useState<ErrorInterface>({
    errorType: '',
    errorShow: false
  });

  const [errorVaginalDeliveries, setErrorVaginalDeliveries] =
    useState<ErrorInterface>({
      errorType: '',
      errorShow: false
    });

  const [errorCesareanDeliveries, setErrorCesareanDeliveries] =
    useState<ErrorInterface>({
      errorType: '',
      errorShow: false
    });

  useEffect(() => {
    const getPregnantEvolutionData = async () => {
      if (params.id) {
        const response = await GetPregnantEvolutionData(parseInt(params.id));
        if (response?.status === 200) {
          const data = response.data[response.data.length - 1];

          setBlockName(true);
          setBlockBirth(true);
          setBlockCpf(true);
          setBlockGender(true);
          setBlockRace(true);
          setBlockFirstPregnancy(true);

          setName(data.gestante.nome);
          setBirthDate(data.gestante.dataNascimento);
          setRace(data.gestante.raca.toString());
          setGender(data.gestante.sexo);
          setCpf(data.gestante.cpf);
          setHeadOfHousehold(data.chefeFamilia);
          setRisc(data.emRisco);
          setMaritalStatus(data.estadoCivil.toString());
          setEducationLevel(data.escolaridade.toString());
          setFamilyIncome(data.rendaFamiliar.toString());
          setCity(data.municipio);
          setHousing(data.tipoMoradia.toString());
          setElectricity(data.energiaEletricaDomicilio);
          setSewageNetwork(data.moradiaRedeEsgoto);
          setTreatedWater(data.tratamentoAgua);
          setBreastfeeding(data.amamentacao);
          setContact(data.contato);
          setEmergencyContact(data.contatoEmergencia);
          setWellFed(data.diagnosticoDesnutricao.toString());
          setFirstPregnant(2);

          // Segunda parte
          setAbortions(data.quantidadeAbortos.toString());
          setLiveChildren(data.quantidadeFilhosVivos.toString());
          setTwins(data.quantidadeGemelares.toString());
          setLiveBirths(data.quantidadeNascidosVivos.toString());
          setStillbirths(data.quantidadeNascidosMortos.toString());
          setBirthWeight25004000(data.quantidadeRnPeso2500_4000.toString());
          setBirthWeightlt2500(data.quantidadeRnPesoMenor2500.toString());
          setBirthWeightgt4000(data.quantidadeRnPesoMaior4000.toString());
          setDeathsFirstWeek(data.quantidadeObitosSemana1.toString());
          setDeathsAfterFirstWeek(data.quantidadeObitosAposSemana1.toString());
          setDiabetes(data.diabetes);
          setPelvicSurgery(data.cirurgiaPelvica);
          setDeliveries(data.quantidadePartos.toString());
          setVaginalDeliveries(data.quantidadePartosVaginais.toString());
          setCesareanDeliveries(data.quantidadePartosCesarios.toString());
          setUrinaryInfection(data.infeccaoUrinaria);
          setCongenitalMalformation(data.maFormacaoCongenita);
          setHypertension(data.hipertensao);
          setTwinFamilyHistory(data.familiarGemeos);
        }
      }
    };
    getPregnantEvolutionData();
  }, []);

  const handleChangeName = (e: { target: { value: string } }) => {
    const { value } = e.target;
    try {
      pregnantSchemaPartOne.shape.nome.parse(value);
      setErrorName({ errorType: '', errorShow: false });
    } catch (error) {
      setErrorName({ errorType: 'error', errorShow: true });
    }
    setName(value);
  };

  const handleChangeBirthDate = (
    date: unknown,
    dateString: string | string[]
  ) => {
    try {
      pregnantSchemaPartOne.shape.dataNascimento.parse(dateString);
      setErrorBirthDate({ errorType: '', errorShow: false });
      if (dateString == '') {
        setErrorBirthDate({ errorType: 'error', errorShow: true });
      }
    } catch (error) {
      console.log(error);
      setErrorBirthDate({ errorType: 'error', errorShow: true });
    }
    console.log(date);
    setBirthDate(dateString);
  };

  const handleChangeRace = (value: unknown) => {
    if (typeof value === 'string') {
      setRace(value);
    }
  };

  const handleChangeGender = (value: unknown) => {
    if (typeof value === 'string') {
      setGender(value);
    }
  };

  const handleChangeCpf = (e: { target: { value: string } }) => {
    const { value } = e.target;
    const inputValue = value.replace(/\D/g, '');
    try {
      pregnantSchemaPartOne.shape.cpf.parse(inputValue);
      setErrorCpf({ errorType: '', errorShow: false });
    } catch (error) {
      setErrorCpf({ errorType: 'error', errorShow: true });
    }
    setCpf(inputValue);
  };

  const handleChangeHeadOfHousehold = (e: RadioChangeEvent) => {
    setHeadOfHousehold(e.target.value);
  };

  const handleChangeRisc = (e: RadioChangeEvent) => {
    setRisc(e.target.value);
  };

  const handleChangeMaritalStatus = (value: unknown) => {
    if (typeof value === 'string') {
      setMaritalStatus(value);
    }
  };

  const handleChangeEducationLevel = (value: unknown) => {
    if (typeof value === 'string') {
      setEducationLevel(value);
    }
  };

  const handleChangeFamilyIncome = (e: { target: { value: string } }) => {
    const { value } = e.target;
    try {
      pregnantSchemaPartOne.shape.rendaFamiliar.parse(value);
      setErrorFamilyIncome({ errorType: '', errorShow: false });
    } catch (error) {
      setErrorFamilyIncome({ errorType: 'error', errorShow: true });
    }
    setFamilyIncome(value);
  };

  const handleChangeCity = (e: { target: { value: string } }) => {
    const { value } = e.target;
    try {
      pregnantSchemaPartOne.shape.municipio.parse(value);
      setErrorCity({ errorType: '', errorShow: false });
    } catch (error) {
      setErrorCity({ errorType: 'error', errorShow: true });
    }
    setCity(value);
  };

  const handleChangeHousing = (value: unknown) => {
    if (typeof value === 'string') {
      setHousing(value);
    }
  };

  const handleChangeElectricity = (e: RadioChangeEvent) => {
    setElectricity(e.target.value);
  };

  const handleChangeSewageNetwork = (e: RadioChangeEvent) => {
    setSewageNetwork(e.target.value);
  };

  const handleChangeTreatedWater = (e: RadioChangeEvent) => {
    setTreatedWater(e.target.value);
  };

  const handleChangeFirstPregnant = (e: RadioChangeEvent) => {
    setFirstPregnant(e.target.value);
  };

  const handleChangeLastPregnancyDate = (
    date: unknown,
    dateString: string | string[]
  ) => {
    try {
      pregnantSchemaPartTwo.shape.dataUltimaGestacao.parse(dateString);
      setErrorLastPregnancyDate({ errorType: '', errorShow: false });
      if (dateString == '') {
        setErrorLastPregnancyDate({ errorType: 'error', errorShow: true });
      }
    } catch (error) {
      console.log(error);
      setErrorLastPregnancyDate({ errorType: 'error', errorShow: true });
    }
    console.log(date);
    setLastPregnancyDate(dateString);
  };

  const handleChangeWellFed = (value: unknown) => {
    if (typeof value === 'string') {
      setWellFed(value);
    }
  };

  const handleChangeBreastfeeding = (e: RadioChangeEvent) => {
    setBreastfeeding(e.target.value);
  };

  const handleChangeContact = (e: { target: { value: string } }) => {
    const { value } = e.target;
    const inputValue = value.replace(/\D/g, '');
    try {
      pregnantSchemaPartOne.shape.contato.parse(inputValue);
      setErrorContact({ errorType: '', errorShow: false });
    } catch (error) {
      setErrorContact({ errorType: 'error', errorShow: true });
    }
    setContact(inputValue);
  };

  const handleChangeEmergencyContact = (e: { target: { value: string } }) => {
    const { value } = e.target;
    const inputValue = value.replace(/\D/g, '');
    try {
      pregnantSchemaPartOne.shape.contatoEmergencia.parse(inputValue);
      setErrorEmergencyContact({ errorType: '', errorShow: false });
    } catch (error) {
      setErrorEmergencyContact({ errorType: 'error', errorShow: true });
    }
    setEmergencyContact(inputValue);
  };

  //segunda parte
  const handleChangeAbortions = (e: { target: { value: string } }) => {
    const { value } = e.target;
    try {
      pregnantSchemaPartTwo.shape.quantidadeAbortos.parse(value);
      setErrorAbortions({ errorType: '', errorShow: false });
    } catch (error) {
      setErrorAbortions({ errorType: 'error', errorShow: true });
    }
    setAbortions(value);
  };

  const handleChangeLiveChildren = (e: { target: { value: string } }) => {
    const { value } = e.target;
    try {
      pregnantSchemaPartTwo.shape.quantidadeFilhosVivos.parse(value);
      setErrorLiveChildren({ errorType: '', errorShow: false });
    } catch (error) {
      setErrorLiveChildren({ errorType: 'error', errorShow: true });
    }
    setLiveChildren(value);
  };

  const handleChangeTwins = (e: { target: { value: string } }) => {
    const { value } = e.target;
    try {
      pregnantSchemaPartTwo.shape.quantidadeGemelares.parse(value);
      setErrorTwins({ errorType: '', errorShow: false });
    } catch (error) {
      setErrorTwins({ errorType: 'error', errorShow: true });
    }
    setTwins(value);
  };

  const handleChangeLiveBirths = (e: { target: { value: string } }) => {
    const { value } = e.target;
    try {
      pregnantSchemaPartTwo.shape.quantidadeNascidosVivos.parse(value);
      setErrorLiveBirths({ errorType: '', errorShow: false });
    } catch (error) {
      setErrorLiveBirths({ errorType: 'error', errorShow: true });
    }
    setLiveBirths(value);
  };

  const handleChangeStillbirths = (e: { target: { value: string } }) => {
    const { value } = e.target;
    try {
      pregnantSchemaPartTwo.shape.quantidadeNascidosMortos.parse(value);
      setErrorStillbirths({ errorType: '', errorShow: false });
    } catch (error) {
      setErrorStillbirths({ errorType: 'error', errorShow: true });
    }
    setStillbirths(value);
  };

  const handleChangeBirthWeight25004000 = (e: {
    target: { value: string };
  }) => {
    const { value } = e.target;
    try {
      pregnantSchemaPartTwo.shape.quantidadeRnPeso2500_4000.parse(value);
      setErrorBirthWeight25004000({ errorType: '', errorShow: false });
    } catch (error) {
      setErrorBirthWeight25004000({ errorType: 'error', errorShow: true });
    }
    setBirthWeight25004000(value);
  };

  const handleChangeBirthWeightlt2500 = (e: { target: { value: string } }) => {
    const { value } = e.target;
    try {
      pregnantSchemaPartTwo.shape.quantidadeRnPesoMenor2500.parse(value);
      setErrorBirthWeightlt2500({ errorType: '', errorShow: false });
    } catch (error) {
      setErrorBirthWeightlt2500({ errorType: 'error', errorShow: true });
    }
    setBirthWeightlt2500(value);
  };

  const handleChangeBirthWeightgt4000 = (e: { target: { value: string } }) => {
    const { value } = e.target;
    try {
      pregnantSchemaPartTwo.shape.quantidadeRnPesoMaior4000.parse(value);
      setErrorBirthWeightgt4000({ errorType: '', errorShow: false });
    } catch (error) {
      setErrorBirthWeightgt4000({ errorType: 'error', errorShow: true });
    }
    setBirthWeightgt4000(value);
  };

  const handleChangeDeathsFirstWeek = (e: { target: { value: string } }) => {
    const { value } = e.target;
    try {
      pregnantSchemaPartTwo.shape.quantidadeObitosSemana1.parse(value);
      setErrorDeathsFirstWeek({ errorType: '', errorShow: false });
    } catch (error) {
      setErrorDeathsFirstWeek({ errorType: 'error', errorShow: true });
    }
    setDeathsFirstWeek(value);
  };

  const handleChangeDeathsAfterFirstWeek = (e: {
    target: { value: string };
  }) => {
    const { value } = e.target;
    try {
      pregnantSchemaPartTwo.shape.quantidadeObitosAposSemana1.parse(value);
      setErrorDeathsAfterFirstWeek({ errorType: '', errorShow: false });
    } catch (error) {
      setErrorDeathsAfterFirstWeek({ errorType: 'error', errorShow: true });
    }
    setDeathsAfterFirstWeek(value);
  };

  const handleChangeDiabetes = (e: RadioChangeEvent) => {
    setDiabetes(e.target.value);
  };

  const handleChangePelvicSurgery = (e: RadioChangeEvent) => {
    setPelvicSurgery(e.target.value);
  };

  const handleChangeDeliveries = (e: { target: { value: string } }) => {
    const { value } = e.target;
    try {
      pregnantSchemaPartTwo.shape.quantidadePartos.parse(value);
      setErrorDeliveries({ errorType: '', errorShow: false });
    } catch (error) {
      setErrorDeliveries({ errorType: 'error', errorShow: true });
    }
    setDeliveries(value);
  };

  const handleChangeVaginalDeliveries = (e: { target: { value: string } }) => {
    const { value } = e.target;
    try {
      pregnantSchemaPartTwo.shape.quantidadePartosVaginais.parse(value);
      setErrorVaginalDeliveries({ errorType: '', errorShow: false });
    } catch (error) {
      setErrorVaginalDeliveries({ errorType: 'error', errorShow: true });
    }
    setVaginalDeliveries(value);
  };

  const handleChangeCesareanDeliveries = (e: { target: { value: string } }) => {
    const { value } = e.target;
    try {
      pregnantSchemaPartTwo.shape.quantidadePartosCesarios.parse(value);
      setErrorCesareanDeliveries({ errorType: '', errorShow: false });
    } catch (error) {
      setErrorCesareanDeliveries({ errorType: 'error', errorShow: true });
    }
    setCesareanDeliveries(value);
  };

  const handleChangeUrinaryInfection = (e: RadioChangeEvent) => {
    setUrinaryInfection(e.target.value);
  };

  const handleChangeCongenitalMalformation = (e: RadioChangeEvent) => {
    setCongenitalMalformation(e.target.value);
  };

  const handleChangeHypertension = (e: RadioChangeEvent) => {
    setHypertension(e.target.value);
  };

  const handleChangeTwinFamilyHistory = (e: RadioChangeEvent) => {
    setTwinFamilyHistory(e.target.value);
  };

  const pregnantFirstData = {
    nome: name,
    dataNascimento: birthDate,
    raca: race,
    sexo: gender,
    cpf: cpf,
    chefeFamilia: headOfHousehold,
    emRisco: risc,
    estadoCivil: maritalStatus,
    escolaridade: educationLevel,
    rendaFamiliar: familyIncome,
    municipio: city,
    tipoMoradia: housing,
    energiaEletricaDomicilio: electricity,
    moradiaRedeEsgoto: sewageNetwork,
    tratamentoAgua: treatedWater,
    amamentacao: breastfeeding,
    diagnosticoDesnutricao: wellFed,
    contato: contact,
    contatoEmergencia: emergencyContact
  };
  const pregnantSecondData = {
    // Segunda parte
    dataUltimaGestacao: lastPregnancyDate || '',
    quantidadeAbortos: abortions,
    quantidadeFilhosVivos: liveChildren,
    quantidadeGemelares: twins,
    quantidadeNascidosVivos: liveBirths,
    quantidadeNascidosMortos: stillbirths,
    quantidadeRnPeso2500_4000: birthWeight25004000,
    quantidadeRnPesoMenor2500: birthWeightlt2500,
    quantidadeRnPesoMaior4000: birthWeightgt4000,
    quantidadeObitosSemana1: deathsFirstWeek,
    quantidadeObitosAposSemana1: deathsAfterFirstWeek,
    diabetes: diabetes,
    cirurgiaPelvica: pelvicSurgery,
    quantidadePartos: deliveries,
    quantidadePartosVaginais: vaginalDeliveries,
    quantidadePartosCesarios: cesareanDeliveries,
    infeccaoUrinaria: urinaryInfection,
    maFormacaoCongenita: congenitalMalformation,
    hipertensao: hypertension,
    familiarGemeos: twinFamilyHistory,
    contato: contact,
    contatoEmergencia: emergencyContact
  };

  const pregnantData: PregnantInterface = {
    gestante: {
      nome: name,
      dataNascimento: birthDate?.toString(),
      raca: parseInt(race),
      sexo: gender,
      cpf: cpf
    },
    dadosEvolutivos: {
      gestante: {
        nome: name,
        dataNascimento: birthDate?.toString(),
        raca: parseInt(race),
        sexo: gender,
        cpf: cpf
      },
      chefeFamilia: headOfHousehold,
      estadoCivil: parseInt(maritalStatus),
      escolaridade: parseInt(educationLevel),
      rendaFamiliar: parseInt(familyIncome),
      emRisco: risc,
      municipio: city,
      tipoMoradia: parseInt(housing),
      energiaEletricaDomicilio: electricity,
      moradiaRedeEsgoto: sewageNetwork,
      tratamentoAgua: treatedWater,
      amamentacao: breastfeeding,
      diagnosticoDesnutricao: parseInt(wellFed),
      contato: contact,
      contatoEmergencia: emergencyContact,
      dataUltimaGestacao: lastPregnancyDate?.toString() || '',
      quantidadeAbortos: parseInt(abortions),
      quantidadeFilhosVivos: parseInt(liveChildren),
      quantidadeGemelares: parseInt(twins),
      quantidadeNascidosVivos: parseInt(liveBirths),
      quantidadeNascidosMortos: parseInt(stillbirths),
      quantidadeRnPeso2500_4000: parseInt(birthWeight25004000),
      quantidadeRnPesoMenor2500: parseInt(birthWeightlt2500),
      quantidadeRnPesoMaior4000: parseInt(birthWeightgt4000),
      quantidadeObitosSemana1: parseInt(deathsFirstWeek),
      quantidadeObitosAposSemana1: parseInt(deathsAfterFirstWeek),
      diabetes: diabetes,
      cirurgiaPelvica: pelvicSurgery,
      quantidadePartos: parseInt(deliveries),
      quantidadePartosVaginais: parseInt(vaginalDeliveries),
      quantidadePartosCesarios: parseInt(cesareanDeliveries),
      infeccaoUrinaria: urinaryInfection,
      maFormacaoCongenita: congenitalMalformation,
      hipertensao: hypertension,
      familiarGemeos: twinFamilyHistory
    }
  };

  const postPregnant = async () => {
    const response = await PostPregnant(pregnantData);
    if (response?.status == 200) {
      successNotification('Gestante cadastrada com sucesso!');
      navigate(`/pregnancies/${response.data.gestante.id}`);
    }
  };

  const postEvolutionData = async () => {
    if (params.id && pregnantData.dadosEvolutivos) {
      const response = await PostPregnantEvolutionData(
        parseInt(params.id),
        pregnantData.dadosEvolutivos
      );
      if (response?.status == 200) {
        successNotification('Dados atualizados com sucesso!');
        navigate(`/pregnancies/${params.id}`);
      }
    }
  };

  const handleSetProgress = () => {
    try {
      pregnantSchemaPartOne.parse(pregnantFirstData);
      setProgress(!progress);
      if (firstPregnant == 1) {
        setProgressBar(72);
      } else {
        setProgressBar(38.5);
      }
    } catch (error) {
      if (error instanceof ZodError) {
        warningNotification(error.errors[0].message);
      }
    }
  };

  const Register = () => {
    try {
      if (firstPregnant == 2) {
        pregnantSchemaPartTwo.parse(pregnantSecondData);
        if (params.id) {
          postEvolutionData();
        } else {
          postPregnant();
        }
      } else {
        pregnantSchemaPartTwoFirstPregnant.parse(pregnantSecondData);
        postPregnant();
      }
      setProgressBar(100);
      navigate('/dashboard');
    } catch (error) {
      if (error instanceof ZodError) {
        warningNotification(error.errors[0].message);
      }
    }
  };

  const handleBackArrow = () => {
    navigate('/dashboard');
  };

  return (
    <S.Container>
      <S.Contente>
        <S.TopContainer>
          <S.ProgressBar percent={progressBar} showInfo={false} />
          <div className="arrow">
            <ArrowUUpLeft size={22} color="#B1488A" onClick={handleBackArrow} />
            <img src={Logo} alt="angels logo" />
          </div>
        </S.TopContainer>
        {!progress && (
          <S.FormContainer>
            <S.InputRow>
              <Input
                label={'Nome:'}
                placeHolder="Digite o nome..."
                type="text"
                inputFunction={handleChangeName}
                value={name}
                errorShow={errorName?.errorShow}
                status={errorName?.errorType}
                infoText="O nome precisa ter entre 2 e 80 letras"
                color="#b1488a"
                disabled={blockName}
              />
            </S.InputRow>
            <S.InputRow>
              <DateSelect
                label="Nascimento:"
                placeHolder="Selecione uma data"
                inputFunction={handleChangeBirthDate}
                status={errorBirthDate.errorType}
                value={
                  birthDate?.toString()
                    ? moment(birthDate.toString())
                    : undefined
                }
                disable={blockBirth}
              />
              <Select
                label="Raça:"
                defaut="Selecione uma opcão"
                list={raceList}
                selectFunc={handleChangeRace}
                value={race}
                disable={blockRace}
              />
              <Select
                label="Sexo:"
                defaut="Selecione uma opcão"
                list={genderList}
                selectFunc={handleChangeGender}
                value={gender}
                disable={blockGender}
              />
              <InputMask
                mask={'999.999.999-99'}
                label={'Cpf:'}
                placeHolder="xxx.xxx.xxx-xx"
                type="text"
                inputFunction={handleChangeCpf}
                value={cpf}
                errorShow={errorCpf?.errorShow}
                status={errorCpf?.errorType}
                infoText="O cpf precisa ser válido"
                color="#b1488a"
                disabled={blockCpf}
              />
            </S.InputRow>
            <S.InputRow>
              <RadioSelect
                label="Chefe de familia:"
                firstOption="Sim"
                secondOption="Nao"
                firstValue={true}
                secondValue={false}
                radioFunction={handleChangeHeadOfHousehold}
                value={headOfHousehold}
              />
              <RadioSelect
                label="Em risco:"
                firstOption="Sim"
                secondOption="Nao"
                firstValue={true}
                secondValue={false}
                radioFunction={handleChangeRisc}
                value={risc}
              />
              <Select
                label="Estado civil:"
                defaut="Selecione uma opcão"
                list={maritalStatusList}
                selectFunc={handleChangeMaritalStatus}
                value={maritalStatus}
              />
              <Select
                label="Escolaridade:"
                defaut="Selecione uma opcão"
                list={educationLevelsList}
                selectFunc={handleChangeEducationLevel}
                value={educationLevel}
              />
              <Input
                label={'Renda Familiar:'}
                placeHolder="Digite a renda..."
                type="text"
                inputFunction={handleChangeFamilyIncome}
                value={familyIncome}
                errorShow={errorFamilyIncome?.errorShow}
                status={errorFamilyIncome?.errorType}
                infoText="a renda precisa ser válida"
                color="#b1488a"
              />
            </S.InputRow>
            <S.InputRow>
              <Input
                label={'Minicipio:'}
                placeHolder="Digite municipio..."
                type="text"
                inputFunction={handleChangeCity}
                value={city}
                errorShow={errorCity?.errorShow}
                status={errorCity?.errorType}
                infoText="A cidade ter entre 2 e 30 letras"
                color="#b1488a"
              />
              <Select
                label="Moradia:"
                defaut="Selecione uma opcão"
                list={housingTypesList}
                selectFunc={handleChangeHousing}
                value={housing}
              />
              <RadioSelect
                label="Eletricidade na moradia:"
                firstOption="Sim"
                secondOption="Nao"
                firstValue={true}
                secondValue={false}
                radioFunction={handleChangeElectricity}
                value={electricity}
              />
              <RadioSelect
                label="Rede de esgoto:"
                firstOption="Sim"
                secondOption="Nao"
                firstValue={true}
                secondValue={false}
                radioFunction={handleChangeSewageNetwork}
                value={sewageNetwork}
              />
              <RadioSelect
                label="Água tratada:"
                firstOption="Sim"
                secondOption="Nao"
                firstValue={true}
                secondValue={false}
                radioFunction={handleChangeTreatedWater}
                value={treatedWater}
              />
            </S.InputRow>
            <S.InputRow>
              <RadioSelect
                label="Primeira gestação:"
                firstOption="Sim"
                secondOption="Nao"
                firstValue={1}
                secondValue={2}
                radioFunction={handleChangeFirstPregnant}
                value={firstPregnant}
                disable={blockFirstPregnancy}
              />
              <Select
                label="Nível de nutrição:"
                defaut="Selecione uma opcão"
                list={malnutritionLevelsList}
                selectFunc={handleChangeWellFed}
                value={wellFed}
              />

              <RadioSelect
                label="Amamentação:"
                firstOption="Sim"
                secondOption="Nao"
                firstValue={true}
                secondValue={false}
                radioFunction={handleChangeBreastfeeding}
                value={breastfeeding}
              />
              <InputMask
                label={'Contato:'}
                placeHolder="Digite o contatto..."
                type="text"
                inputFunction={handleChangeContact}
                value={contact}
                errorShow={errorContact?.errorShow}
                status={errorContact?.errorType}
                infoText="O contato precisa ser válido Brasil"
                color="#b1488a"
                mask={'(99) 9 9999-9999'}
              />
              <InputMask
                label={'Contato de emergencia:'}
                placeHolder="Digite o contato de emergencia..."
                type="text"
                inputFunction={handleChangeEmergencyContact}
                value={emergencyContact}
                errorShow={errorEmergencyContact?.errorShow}
                status={errorEmergencyContact?.errorType}
                infoText="O contato precisa ser válido no Brasil"
                color="#b1488a"
                mask={'(99) 9 9999-9999'}
              />
            </S.InputRow>
          </S.FormContainer>
        )}
        {progress && (
          <S.FormContainer>
            {firstPregnant == 2 ? (
              <>
                <S.InputRow>
                  <DateSelect
                    label="Última gestação:"
                    placeHolder="Selecione uma data"
                    inputFunction={handleChangeLastPregnancyDate}
                    status={errorLastPregnancyDate.errorType}
                  />
                  <Input
                    label={'Abortos:'}
                    placeHolder="0"
                    type="string"
                    inputFunction={handleChangeAbortions}
                    value={abortions}
                    status={errorAbortions.errorType}
                  />

                  <Input
                    label={'Filhos vivos:'}
                    placeHolder="0"
                    type="string"
                    inputFunction={handleChangeLiveChildren}
                    value={liveChildren}
                    status={errorLiveChildren.errorType}
                  />
                  <Input
                    label={'Gemelares:'}
                    placeHolder="0"
                    type="string"
                    inputFunction={handleChangeTwins}
                    value={twins}
                    status={errorTwins.errorType}
                  />
                  <Input
                    label={'Nascidos vivos:'}
                    placeHolder="0"
                    type="string"
                    inputFunction={handleChangeLiveBirths}
                    value={liveBirths}
                    status={errorLiveBirths.errorType}
                  />
                  <Input
                    label={'Nascidos mortos:'}
                    placeHolder="0"
                    type="string"
                    inputFunction={handleChangeStillbirths}
                    value={stillbirths}
                    status={errorStillbirths.errorType}
                  />
                </S.InputRow>
                <S.InputRow>
                  <Input
                    label={'rn peso entre 2500 e 4000:'}
                    placeHolder="0"
                    type="string"
                    inputFunction={handleChangeBirthWeight25004000}
                    value={birthWeight25004000}
                    status={errorBirthWeight25004000.errorType}
                  />
                  <Input
                    label={'rn peso menor 2500:'}
                    placeHolder="0"
                    type="string"
                    inputFunction={handleChangeBirthWeightlt2500}
                    value={birthWeightlt2500}
                    status={errorBirthWeightlt2500.errorType}
                  />
                  <Input
                    label={'rn peso maior 4000:'}
                    placeHolder="0"
                    type="string"
                    inputFunction={handleChangeBirthWeightgt4000}
                    value={birthWeightgt4000}
                    status={errorBirthWeightgt4000.errorType}
                  />
                </S.InputRow>
                <S.InputRow>
                  <Input
                    label={'Óbitos na primeira semana:'}
                    placeHolder="0"
                    type="string"
                    inputFunction={handleChangeDeathsFirstWeek}
                    value={deathsFirstWeek}
                    status={errorDeathsFirstWeek.errorType}
                  />
                  <Input
                    label={'Óbitos após primeira semana:'}
                    placeHolder="0"
                    type="string"
                    inputFunction={handleChangeDeathsAfterFirstWeek}
                    value={deathsAfterFirstWeek}
                    status={errorDeathsAfterFirstWeek.errorType}
                  />

                  <RadioSelect
                    label="Diabetes:"
                    firstOption="Sim"
                    secondOption="Nao"
                    firstValue={true}
                    secondValue={false}
                    radioFunction={handleChangeDiabetes}
                    value={diabetes}
                  />
                  <RadioSelect
                    label="Cirugia pélvica:"
                    firstOption="Sim"
                    secondOption="Nao"
                    firstValue={true}
                    secondValue={false}
                    radioFunction={handleChangePelvicSurgery}
                    value={pelvicSurgery}
                  />
                </S.InputRow>
                <S.InputRow>
                  <Input
                    label={'Partos:'}
                    placeHolder="0"
                    type="string"
                    inputFunction={handleChangeDeliveries}
                    value={deliveries}
                    status={errorDeliveries.errorType}
                  />
                  <Input
                    label={'Partos vaginais:'}
                    placeHolder="0"
                    type="string"
                    inputFunction={handleChangeVaginalDeliveries}
                    value={vaginalDeliveries}
                    status={errorVaginalDeliveries.errorType}
                  />
                  <Input
                    label={'Partos cesarios:'}
                    placeHolder="0"
                    type="string"
                    inputFunction={handleChangeCesareanDeliveries}
                    value={cesareanDeliveries}
                    status={errorCesareanDeliveries.errorType}
                  />
                </S.InputRow>
              </>
            ) : (
              <>
                <S.InputRow>
                  <Input
                    label={'Abortos:'}
                    placeHolder="0"
                    type="string"
                    inputFunction={handleChangeAbortions}
                    value={abortions}
                    status={errorAbortions.errorType}
                  />
                  <RadioSelect
                    label="Diabetes:"
                    firstOption="Sim"
                    secondOption="Nao"
                    firstValue={true}
                    secondValue={false}
                    radioFunction={handleChangeDiabetes}
                    value={diabetes}
                  />
                  <RadioSelect
                    label="Cirugia pélvica:"
                    firstOption="Sim"
                    secondOption="Nao"
                    firstValue={true}
                    secondValue={false}
                    radioFunction={handleChangePelvicSurgery}
                    value={pelvicSurgery}
                  />
                </S.InputRow>
              </>
            )}
            <S.InputRow>
              <RadioSelect
                label="Infecção urinária:"
                firstOption="Sim"
                secondOption="Nao"
                firstValue={true}
                secondValue={false}
                radioFunction={handleChangeUrinaryInfection}
                value={urinaryInfection}
              />
              <RadioSelect
                label="Má formação congênica:"
                firstOption="Sim"
                secondOption="Nao"
                firstValue={true}
                secondValue={false}
                radioFunction={handleChangeCongenitalMalformation}
                value={congenitalMalformation}
              />
              <RadioSelect
                label="Hipertensão:"
                firstOption="Sim"
                secondOption="Nao"
                firstValue={true}
                secondValue={false}
                radioFunction={handleChangeHypertension}
                value={hypertension}
              />
              <RadioSelect
                label="Familiar gêmeos:"
                firstOption="Sim"
                secondOption="Nao"
                firstValue={true}
                secondValue={false}
                radioFunction={handleChangeTwinFamilyHistory}
                value={twinFamilyHistory}
              />
            </S.InputRow>
          </S.FormContainer>
        )}
        <S.ButtonContainer $progress={progress}>
          {progress && (
            <Button
              label="Voltar"
              icon={<ArrowLeft size={18} weight="fill" />}
              shape="round"
              buttonFunction={handleSetProgress}
            />
          )}
          <Button
            label={progress ? 'Cadastrar' : 'Próximo'}
            icon={!progress && <ArrowRight size={18} weight="fill" />}
            shape="round"
            buttonFunction={progress ? Register : handleSetProgress}
          />
        </S.ButtonContainer>
      </S.Contente>
    </S.Container>
  );
}
