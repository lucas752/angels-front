import * as S from './styles';
import Logo from '../../assets/angelsLogo.svg';
import { Input } from '../../components/Input';
import { Select } from '../../components/Select';
import { DateSelect } from '../../components/DateSelect';
import { RadioSelect } from '../../components/RadioSelect';
import { Button } from '../../components/Button';
import { ArrowLeft, ArrowRight } from '@phosphor-icons/react';
import { useState } from 'react';

export function PregnantRegister() {
  const [progress, setProgress] = useState<boolean>(false);

  const [name, setName] = useState<string>();
  const [birthDate, setBirthDate] = useState<Date>();
  const [race, setRace] = useState<string>();
  const [gender, setGender] = useState<string>();
  const [cpf, setCpf] = useState<string>();
  const [headOfHousehold, setHeadOfHousehold] = useState<boolean>();
  const [maritalStatus, setMaritalStatus] = useState<string>();
  const [educationLevel, setEducationLevel] = useState<string>();
  const [familyIncome, setFamilyIncome] = useState<number>();
  const [city, setCity] = useState<string>();
  const [housing, setHousing] = useState<string>();
  const [electricity, setElectricity] = useState<boolean>();
  const [sewageNetwork, setSewageNetwork] = useState<boolean>();
  const [treatedWater, setTreatedWater] = useState<boolean>();
  const [lastPregnancyDate, setLastPregnancyDate] = useState<Date>();
  const [wellFed, setWellFed] = useState<boolean>();
  const [breastfeeding, setBreastfeeding] = useState<boolean>();
  const [contact, setContact] = useState<string>();
  const [emergencyContact, setEmergencyContact] = useState<string>();

  const [abortions, setAbortions] = useState<number>();
  const [liveChildren, setLiveChildren] = useState<number>();
  const [twins, setTwins] = useState<number>();
  const [liveBirths, setLiveBirths] = useState<number>();
  const [stillbirths, setStillbirths] = useState<number>();
  const [birthWeight25004000, setBirthWeight25004000] = useState<number>();
  const [birthWeightlt2500, setBirthWeightlt2500] = useState<number>();
  const [birthWeightgt4000, setBirthWeightgt4000] = useState<number>();
  const [deathsFirstWeek, setDeathsFirstWeek] = useState<number>();
  const [deathsAfterFirstWeek, setDeathsAfterFirstWeek] = useState<number>();
  const [diabetes, setDiabetes] = useState<boolean>();
  const [pelvicSurgery, setPelvicSurgery] = useState<boolean>();
  const [deliveries, setDeliveries] = useState<number>();
  const [vaginalDeliveries, setVaginalDeliveries] = useState<number>();
  const [cesareanDeliveries, setCesareanDeliveries] = useState<number>();
  const [urinaryInfection, setUrinaryInfection] = useState<boolean>();
  const [congenitalMalformation, setCongenitalMalformation] =
    useState<boolean>();
  const [hypertension, setHypertension] = useState<boolean>();
  const [twinFamilyHistory, setTwinFamilyHistory] = useState<boolean>();

  const handleChangeName = (e: { target: { value: string } }) => {
    const { value } = e.target;
    setName(value);
  };

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
              />
            </div>
            <div>
              <DateSelect
                label="Nascimento:"
                placeHolder="Selecione uma data"
              />
              <Select label="Raça:" defaut="Selecione uma opcão" />
              <Select label="Sexo:" defaut="Selecione uma opcão" />
              <Input label={'Cpf:'} placeHolder="xxx.xxx.xxx-xx" type="text" />
            </div>
            <div>
              <RadioSelect
                label="Chefe de familia:"
                firstOption="Sim"
                secondOption="Nao"
                firstValue={1}
                secondValue={2}
              />
              <Select label="Estado civil:" defaut="Selecione uma opcão" />
              <Input
                label={'Escolaridade:'}
                placeHolder="Digite a escolaridade..."
                type="text"
              />
              <Input
                label={'Renda Familiar:'}
                placeHolder="Digite a renda..."
                type="text"
              />
            </div>
            <div>
              <Input
                label={'Minicipio:'}
                placeHolder="Digite municipio..."
                type="text"
              />
              <Select label="Moradia:" defaut="Selecione uma opcão" />
              <RadioSelect
                label="Eletricidade:"
                firstOption="Sim"
                secondOption="Nao"
                firstValue={1}
                secondValue={2}
              />
              <RadioSelect
                label="Rede de esgoto:"
                firstOption="Sim"
                secondOption="Nao"
                firstValue={1}
                secondValue={2}
              />
              <RadioSelect
                label="Agua tratada:"
                firstOption="Sim"
                secondOption="Nao"
                firstValue={1}
                secondValue={2}
              />
            </div>
            <div>
              <DateSelect
                label="Última gestação:"
                placeHolder="Selecione uma data"
              />

              <RadioSelect
                label="Nutrida:"
                firstOption="Sim"
                secondOption="Nao"
                firstValue={1}
                secondValue={2}
              />

              <RadioSelect
                label="Amamentacao:"
                firstOption="Sim"
                secondOption="Nao"
                firstValue={1}
                secondValue={2}
              />
              <Input
                label={'Contato:'}
                placeHolder="Digite o contatto..."
                type="text"
              />
              <Input
                label={'contato de emergencia:'}
                placeHolder="Digite o contato de emergencia..."
                type="text"
              />
            </div>
          </S.FormContainer>
        )}
        {progress && (
          <S.FormContainer>
            <div>
              <Input label={'Abortos:'} placeHolder="0" type="number" />
              <Input label={'Filhos vivos:'} placeHolder="0" type="number" />
              <Input label={'Gemelares:'} placeHolder="0" type="number" />
              <Input label={'Nascidos vivos:'} placeHolder="0" type="number" />
              <Input label={'Nascidos mortos:'} placeHolder="0" type="number" />
            </div>
            <div>
              <Input
                label={'rn peso entre 2500 e 4000:'}
                placeHolder="0"
                type="number"
              />
              <Input
                label={'rn peso menor 2500:'}
                placeHolder="0"
                type="number"
              />
              <Input
                label={'rn peso maior 4000:'}
                placeHolder="0"
                type="number"
              />
            </div>
            <div>
              <Input
                label={'Óbitos na primeira semana:'}
                placeHolder="0"
                type="number"
              />
              <Input
                label={'Óbitos após primeira semana:'}
                placeHolder="0"
                type="number"
              />
              <RadioSelect
                label="Diabetes:"
                firstOption="Sim"
                secondOption="Nao"
                firstValue={1}
                secondValue={2}
              />
              <RadioSelect
                label="Cirugia pélvica:"
                firstOption="Sim"
                secondOption="Nao"
                firstValue={1}
                secondValue={2}
              />
            </div>
            <div>
              <Input label={'Partos:'} placeHolder="0" type="number" />
              <Input label={'Partos vaginais:'} placeHolder="0" type="number" />
              <Input label={'Partos cesarios:'} placeHolder="0" type="number" />
            </div>
            <div>
              <RadioSelect
                label="Infecção urinária:"
                firstOption="Sim"
                secondOption="Nao"
                firstValue={1}
                secondValue={2}
              />
              <RadioSelect
                label="Má formação congênica:"
                firstOption="Sim"
                secondOption="Nao"
                firstValue={1}
                secondValue={2}
              />
              <RadioSelect
                label="Hipertensão:"
                firstOption="Sim"
                secondOption="Nao"
                firstValue={1}
                secondValue={2}
              />
              <RadioSelect
                label="Familiar gêmeos:"
                firstOption="Sim"
                secondOption="Nao"
                firstValue={1}
                secondValue={2}
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
