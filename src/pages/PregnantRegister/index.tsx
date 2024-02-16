import * as S from './styles';
import Logo from '../../assets/angelsLogo.svg';
import { Input } from '../../components/Input';
import { Select } from '../../components/Select';

export function PregnantRegister() {
  return (
    <S.Container>
      <S.Contente>
        <S.TopContainer>
          <img src={Logo} alt="angels logo" />
        </S.TopContainer>
        <S.FormContainer>
          <div>
            <Input label={'Nome:'} placeHolder="Digite o nome..." type="text" />
          </div>
          <div>
            <Input
              label={'Nascimento:'}
              placeHolder="vai ser mudado"
              type="text"
            />
            <Select label="Raça:" />
            <Input label={'Sexo:'} placeHolder="vai ser mudado" type="text" />
            <Input label={'Cpf:'} placeHolder="xxx.xxx.xxx-xx" type="text" />
          </div>
          <div>
            <Input label={'Chefe de familia:'} />
            <Input label={'Estado civil:'} />
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
            <Input label={'Moradia:'} />
            <Input label={'Eletricidade:'} />
            <Input label={'Rede de esgoto:'} />
            <Input label={'Agua tratada:'} />
          </div>
          <div>
            <Input label={'Ultima gestacao:'} />
            <Input label={'Nutrida:'} />
            <Input label={'Amamentacao:'} />
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
      </S.Contente>
    </S.Container>
  );
}
