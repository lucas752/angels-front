import { InfoContainer } from './components/InfoContainer';
import * as S from './styles';

export default function PregnantInfo() {
  return (
    <S.Container>
    <S.Title>
        Informações da gestante
    </S.Title>
    <S.LineContainer>
        <InfoContainer name='Nome' value='Júlia da Silva Santos'/>
        <InfoContainer name='CPF' value='123.456.789-09'/>
    </S.LineContainer>
    </S.Container>
  );
}
