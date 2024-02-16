import * as S from './styles';
import Logo from '../../assets/angelsLogo.svg';
import { Input } from '../../components/Input';

export function PregnantRegister() {
  return (
    <S.Container>
      <S.Contente>
        <S.TopContainer>
          <img src={Logo} alt="angels logo" />
        </S.TopContainer>
        <S.FormContainer>
          <div>
            <Input label={'Nome:'} />
          </div>
          <div>
            <Input label={'Nascimento:'} />
            <Input label={'Raca:'} />
            <Input label={'Sexo:'} />
            <Input label={'Cpf:'} />
          </div>
          <div>
            <Input label={'Chefe de familia:'} />
            <Input label={'Estado civil:'} />
            <Input label={'Escolaridade:'} />
            <Input label={'Renda Familiar:'} />
          </div>
          <div>
            <Input label={'Minicipio:'} />
            <Input label={'Moradia:'} />
            <Input label={'Eletricidade:'} />
            <Input label={'Rede de esgoto:'} />
            <Input label={'Agua tratada:'} />
          </div>
          <div>
            <Input label={'Ultima gestacao:'} />
            <Input label={'Nutrida:'} />
            <Input label={'Amamentacao:'} />
            <Input label={'Contato:'} />
            <Input label={'contato:'} />
          </div>
        </S.FormContainer>
      </S.Contente>
    </S.Container>
  );
}
