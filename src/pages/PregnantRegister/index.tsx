import * as S from './styles';
import Logo from '../../assets/angelsLogo.svg';
import { Input } from '../../components/Input';
import { Select } from '../../components/Select';
import { DateSelect } from '../../components/DateSelect';
import { RadioSelect } from '../../components/RadioSelect';
import { Button } from '../../components/Button';
import { ArrowLeft, ArrowRight } from '@phosphor-icons/react';
import { useState } from 'react';
import { RadioChangeEvent } from 'antd';

export function PregnantRegister() {
  const [progress, setProgress] = useState<boolean>(false);

  const [name, setName] = useState<string>();
  const [birthDate, setBirthDate] = useState<string | string[]>();
  const [race, setRace] = useState<string>();
  const [gender, setGender] = useState<string>();
  const [cpf, setCpf] = useState<string>();
  const [headOfHousehold, setHeadOfHousehold] = useState<number>();
  const [maritalStatus, setMaritalStatus] = useState<string>();
  const [educationLevel, setEducationLevel] = useState<string>();
  const [familyIncome, setFamilyIncome] = useState<string>();
  const [city, setCity] = useState<string>();
  const [housing, setHousing] = useState<string>();
  const [electricity, setElectricity] = useState<number>();
  const [sewageNetwork, setSewageNetwork] = useState<number>();
  const [treatedWater, setTreatedWater] = useState<number>();
  const [lastPregnancyDate, setLastPregnancyDate] = useState<
    string | string[]
  >();
  const [wellFed, setWellFed] = useState<number>();
  const [breastfeeding, setBreastfeeding] = useState<number>();
  const [contact, setContact] = useState<string>();
  const [emergencyContact, setEmergencyContact] = useState<string>();

  //segunda parte
  const [abortions, setAbortions] = useState<string>();
  const [liveChildren, setLiveChildren] = useState<string>();
  const [twins, setTwins] = useState<string>();
  const [liveBirths, setLiveBirths] = useState<string>();
  const [stillbirths, setStillbirths] = useState<string>();
  const [birthWeight25004000, setBirthWeight25004000] = useState<string>();
  const [birthWeightlt2500, setBirthWeightlt2500] = useState<string>();
  const [birthWeightgt4000, setBirthWeightgt4000] = useState<string>();
  const [deathsFirstWeek, setDeathsFirstWeek] = useState<string>();
  const [deathsAfterFirstWeek, setDeathsAfterFirstWeek] = useState<string>();
  const [diabetes, setDiabetes] = useState<number>();
  const [pelvicSurgery, setPelvicSurgery] = useState<number>();
  const [deliveries, setDeliveries] = useState<string>();
  const [vaginalDeliveries, setVaginalDeliveries] = useState<string>();
  const [cesareanDeliveries, setCesareanDeliveries] = useState<string>();
  const [urinaryInfection, setUrinaryInfection] = useState<number>();
  const [congenitalMalformation, setCongenitalMalformation] =
    useState<number>();
  const [hypertension, setHypertension] = useState<number>();
  const [twinFamilyHistory, setTwinFamilyHistory] = useState<number>();

  const handleChangeName = (e: { target: { value: string } }) => {
    const { value } = e.target;
    setName(value);
  };

  const handleChangeBirthDate = (
    date: unknown,
    dateString: string | string[]
  ) => {
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
    setCpf(value);
  };

  const handleChangeHeadOfHousehold = (e: RadioChangeEvent) => {
    setHeadOfHousehold(e.target.value);
  };

  const handleChangeMaritalStatus = (value: unknown) => {
    if (typeof value === 'string') {
      setMaritalStatus(value);
    }
  };

  const handleChangeEducationLevel = (e: { target: { value: string } }) => {
    const { value } = e.target;
    setEducationLevel(value);
  };

  const handleChangeFamilyIncome = (e: { target: { value: string } }) => {
    const { value } = e.target;
    setFamilyIncome(value);
  };

  const handleChangeCity = (e: { target: { value: string } }) => {
    const { value } = e.target;
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

  const handleChangeLastPregnancyDate = (
    date: unknown,
    dateString: string | string[]
  ) => {
    console.log(date);
    setLastPregnancyDate(dateString);
  };

  const handleChangeWellFed = (e: RadioChangeEvent) => {
    setWellFed(e.target.value);
  };

  const handleChangeBreastfeeding = (e: RadioChangeEvent) => {
    setBreastfeeding(e.target.value);
  };

  const handleChangeContact = (e: { target: { value: string } }) => {
    const { value } = e.target;
    setContact(value);
  };

  const handleChangeEmergencyContact = (e: { target: { value: string } }) => {
    const { value } = e.target;
    setEmergencyContact(value);
  };

  //segunda parte
  const handleChangeAbortions = (e: { target: { value: string } }) => {
    const { value } = e.target;
    setAbortions(value);
  };

  const handleChangeLiveChildren = (e: { target: { value: string } }) => {
    const { value } = e.target;
    setLiveChildren(value);
  };

  const handleChangeTwins = (e: { target: { value: string } }) => {
    const { value } = e.target;
    setTwins(value);
  };

  const handleChangeLiveBirths = (e: { target: { value: string } }) => {
    const { value } = e.target;
    setLiveBirths(value);
  };

  const handleChangeStillbirths = (e: { target: { value: string } }) => {
    const { value } = e.target;
    setStillbirths(value);
  };

  const handleChangeBirthWeight25004000 = (e: {
    target: { value: string };
  }) => {
    const { value } = e.target;
    setBirthWeight25004000(value);
  };

  const handleChangeBirthWeightlt2500 = (e: { target: { value: string } }) => {
    const { value } = e.target;
    setBirthWeightlt2500(value);
  };

  const handleChangeBirthWeightgt4000 = (e: { target: { value: string } }) => {
    const { value } = e.target;
    setBirthWeightgt4000(value);
  };

  const handleChangeDeathsFirstWeek = (e: { target: { value: string } }) => {
    const { value } = e.target;
    setDeathsFirstWeek(value);
  };

  const handleChangeDeathsAfterFirstWeek = (e: {
    target: { value: string };
  }) => {
    const { value } = e.target;
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
    setDeliveries(value);
  };

  const handleChangeVaginalDeliveries = (e: { target: { value: string } }) => {
    const { value } = e.target;
    setVaginalDeliveries(value);
  };

  const handleChangeCesareanDeliveries = (e: { target: { value: string } }) => {
    const { value } = e.target;
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

  //select objetos
  const raceList = [
    { value: 'indígena', label: 'Indígena' },
    { value: 'branco', label: 'Branco' },
    { value: 'negro', label: 'Negro' },
    { value: 'pardo', label: 'Pardo' },
    { value: 'asiático', label: 'Asiático' },
    { value: 'árabe', label: 'Árabe' },
    { value: 'judeu', label: 'Judeu' },
    { value: 'europeu_oriental', label: 'Europeu Oriental' },
    { value: 'latino_americano', label: 'Latino Americano' },
    { value: 'africana_não_negra', label: 'Africana Não Negra' }
  ];

  const genderList = [
    { value: 'masculino', label: 'Masculino' },
    { value: 'feminino', label: 'Feminino' },
    { value: 'não_binário', label: 'Não Binário' },
    { value: 'agênero', label: 'Agênero' },
    { value: 'outro', label: 'Outro' }
  ];

  const maritalStatusList = [
    { value: 'solteiro', label: 'Solteiro(a)' },
    { value: 'casado', label: 'Casado(a)' },
    { value: 'união_estável', label: 'União Estável' },
    { value: 'divorciado', label: 'Divorciado(a)' },
    { value: 'viúvo', label: 'Viúvo(a)' },
    { value: 'separado', label: 'Separado(a)' }
  ];

  const housingTypesList = [
    { value: 'casa', label: 'Casa' },
    { value: 'apartamento', label: 'Apartamento' },
    { value: 'condomínio', label: 'Condomínio' },
    { value: 'sítio', label: 'Sítio' },
    { value: 'chácara', label: 'Chácara' },
    { value: 'fazenda', label: 'Fazenda' },
    { value: 'kitnet', label: 'Kitnet' },
    { value: 'casa_de_vila', label: 'Casa de Vila' },
    { value: 'oca', label: 'Oca' },
    { value: 'outro', label: 'Outro' }
  ];

  const handleSetProgress = () => {
    setProgress(!progress);
  };

  return (
    <S.Container>
      <S.Contente>
        <S.TopContainer>
          <img src={Logo} alt="angels logo" />
        </S.TopContainer>
        {!progress && (
          <S.FormContainer>
            <div>
              <Input
                label={'Nome:'}
                placeHolder="Digite o nome..."
                type="text"
                inputFunction={handleChangeName}
              />
            </div>
            <div>
              <DateSelect
                label="Nascimento:"
                placeHolder="Selecione uma data"
                inputFunction={handleChangeBirthDate}
              />
              <Select
                label="Raça:"
                defaut="Selecione uma opcão"
                list={raceList}
                selectFunc={handleChangeRace}
              />
              <Select
                label="Sexo:"
                defaut="Selecione uma opcão"
                list={genderList}
                selectFunc={handleChangeGender}
              />
              <Input
                label={'Cpf:'}
                placeHolder="xxx.xxx.xxx-xx"
                type="text"
                inputFunction={handleChangeCpf}
              />
            </div>
            <div>
              <RadioSelect
                label="Chefe de familia:"
                firstOption="Sim"
                secondOption="Nao"
                firstValue={1}
                secondValue={2}
                radioFunction={handleChangeHeadOfHousehold}
                value={headOfHousehold}
              />
              <Select
                label="Estado civil:"
                defaut="Selecione uma opcão"
                list={maritalStatusList}
                selectFunc={handleChangeMaritalStatus}
              />
              <Input
                label={'Escolaridade:'}
                placeHolder="Digite a escolaridade..."
                type="text"
                inputFunction={handleChangeEducationLevel}
              />
              <Input
                label={'Renda Familiar:'}
                placeHolder="Digite a renda..."
                type="text"
                inputFunction={handleChangeFamilyIncome}
              />
            </div>
            <div>
              <Input
                label={'Minicipio:'}
                placeHolder="Digite municipio..."
                type="text"
                inputFunction={handleChangeCity}
              />
              <Select
                label="Moradia:"
                defaut="Selecione uma opcão"
                list={housingTypesList}
                selectFunc={handleChangeHousing}
              />
              <RadioSelect
                label="Eletricidade:"
                firstOption="Sim"
                secondOption="Nao"
                firstValue={1}
                secondValue={2}
                radioFunction={handleChangeElectricity}
                value={electricity}
              />
              <RadioSelect
                label="Rede de esgoto:"
                firstOption="Sim"
                secondOption="Nao"
                firstValue={1}
                secondValue={2}
                radioFunction={handleChangeSewageNetwork}
                value={sewageNetwork}
              />
              <RadioSelect
                label="Agua tratada:"
                firstOption="Sim"
                secondOption="Nao"
                firstValue={1}
                secondValue={2}
                radioFunction={handleChangeTreatedWater}
                value={treatedWater}
              />
            </div>
            <div>
              <DateSelect
                label="Última gestação:"
                placeHolder="Selecione uma data"
                inputFunction={handleChangeLastPregnancyDate}
              />

              <RadioSelect
                label="Nutrida:"
                firstOption="Sim"
                secondOption="Nao"
                firstValue={1}
                secondValue={2}
                radioFunction={handleChangeWellFed}
                value={wellFed}
              />

              <RadioSelect
                label="Amamentacao:"
                firstOption="Sim"
                secondOption="Nao"
                firstValue={1}
                secondValue={2}
                radioFunction={handleChangeBreastfeeding}
                value={breastfeeding}
              />
              <Input
                label={'Contato:'}
                placeHolder="Digite o contatto..."
                type="text"
                inputFunction={handleChangeContact}
              />
              <Input
                label={'contato de emergencia:'}
                placeHolder="Digite o contato de emergencia..."
                type="text"
                inputFunction={handleChangeEmergencyContact}
              />
            </div>
          </S.FormContainer>
        )}
        {progress && (
          <S.FormContainer>
            <div>
              <Input
                label={'Abortos:'}
                placeHolder="0"
                type="string"
                inputFunction={handleChangeAbortions}
              />
              <Input
                label={'Filhos vivos:'}
                placeHolder="0"
                type="string"
                inputFunction={handleChangeLiveChildren}
              />
              <Input
                label={'Gemelares:'}
                placeHolder="0"
                type="string"
                inputFunction={handleChangeTwins}
              />
              <Input
                label={'Nascidos vivos:'}
                placeHolder="0"
                type="string"
                inputFunction={handleChangeLiveBirths}
              />
              <Input
                label={'Nascidos mortos:'}
                placeHolder="0"
                type="string"
                inputFunction={handleChangeStillbirths}
              />
            </div>
            <div>
              <Input
                label={'rn peso entre 2500 e 4000:'}
                placeHolder="0"
                type="string"
                inputFunction={handleChangeBirthWeight25004000}
              />
              <Input
                label={'rn peso menor 2500:'}
                placeHolder="0"
                type="string"
                inputFunction={handleChangeBirthWeightlt2500}
              />
              <Input
                label={'rn peso maior 4000:'}
                placeHolder="0"
                type="string"
                inputFunction={handleChangeBirthWeightgt4000}
              />
            </div>
            <div>
              <Input
                label={'Óbitos na primeira semana:'}
                placeHolder="0"
                type="string"
                inputFunction={handleChangeDeathsFirstWeek}
              />
              <Input
                label={'Óbitos após primeira semana:'}
                placeHolder="0"
                type="string"
                inputFunction={handleChangeDeathsAfterFirstWeek}
              />
              <RadioSelect
                label="Diabetes:"
                firstOption="Sim"
                secondOption="Nao"
                firstValue={1}
                secondValue={2}
                radioFunction={handleChangeDiabetes}
                value={diabetes}
              />
              <RadioSelect
                label="Cirugia pélvica:"
                firstOption="Sim"
                secondOption="Nao"
                firstValue={1}
                secondValue={2}
                radioFunction={handleChangePelvicSurgery}
                value={pelvicSurgery}
              />
            </div>
            <div>
              <Input
                label={'Partos:'}
                placeHolder="0"
                type="string"
                inputFunction={handleChangeDeliveries}
              />
              <Input
                label={'Partos vaginais:'}
                placeHolder="0"
                type="string"
                inputFunction={handleChangeVaginalDeliveries}
              />
              <Input
                label={'Partos cesarios:'}
                placeHolder="0"
                type="string"
                inputFunction={handleChangeCesareanDeliveries}
              />
            </div>
            <div>
              <RadioSelect
                label="Infecção urinária:"
                firstOption="Sim"
                secondOption="Nao"
                firstValue={1}
                secondValue={2}
                radioFunction={handleChangeUrinaryInfection}
                value={urinaryInfection}
              />
              <RadioSelect
                label="Má formação congênica:"
                firstOption="Sim"
                secondOption="Nao"
                firstValue={1}
                secondValue={2}
                radioFunction={handleChangeCongenitalMalformation}
                value={congenitalMalformation}
              />
              <RadioSelect
                label="Hipertensão:"
                firstOption="Sim"
                secondOption="Nao"
                firstValue={1}
                secondValue={2}
                radioFunction={handleChangeHypertension}
                value={hypertension}
              />
              <RadioSelect
                label="Familiar gêmeos:"
                firstOption="Sim"
                secondOption="Nao"
                firstValue={1}
                secondValue={2}
                radioFunction={handleChangeTwinFamilyHistory}
                value={twinFamilyHistory}
              />
            </div>
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
            icon={<ArrowRight size={18} weight="fill" />}
            shape="round"
            buttonFunction={handleSetProgress}
          />
        </S.ButtonContainer>
      </S.Contente>
    </S.Container>
  );
}
