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
