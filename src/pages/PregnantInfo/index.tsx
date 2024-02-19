import { InfoContainer } from './components/InfoContainer';
import * as S from './styles';

export default function PregnantInfo() {
  return (
    <S.Container>
        <S.ContentContainer>
            <S.Title>
                Informações da gestante
            </S.Title>
            {/* <S.LineContainer>
                <InfoContainer name='Nome' value='Júlia da Silva Santos'/>
                <InfoContainer name='CPF' value='123.456.789-09'/>
            </S.LineContainer>
            <S.LineContainer>
                <InfoContainer name='Nascimento' value='15/04/1990'/>
                <InfoContainer name='Raça' value='Parda'/>
                <InfoContainer name='Gênero' value='Feminino'/>
                <InfoContainer name='Estado civil' value='Solteira'/>
                <InfoContainer name='Escolaridade' value='Superior Completo'/>
            </S.LineContainer>
            <S.LineContainer>
                <InfoContainer name='Chefe de família' value='Sim'/>
                <InfoContainer name='Renda Familiar' value='R$3.500,00'/>
            </S.LineContainer>
            <S.LineContainer>
                <InfoContainer name='Município' value='Sim'/>
                <InfoContainer name='Moradia' value='Casa própria'/>
                <InfoContainer name='Eletricidade' value='Sim'/>
                <InfoContainer name='Rede de esgoto' value='Sim'/>
                <InfoContainer name='Água tratado' value='Sim'/>
            </S.LineContainer>
            <S.LineContainer>
                <InfoContainer name='Última gestação' value='20/02/2023'/>
                <InfoContainer name='Nutrida' value='Sim'/>
                <InfoContainer name='Amamentação' value='Sim'/>
                <InfoContainer name='Contato' value='(11) 98765-4321'/>
                <InfoContainer name='Contato de emergência' value='(11) 91234-5678'/>
            </S.LineContainer> */}
            <S.LineContainer>
                <InfoContainer name='Abortos' value='Nenhum'/>
                <InfoContainer name='Filhos Vivos' value='1'/>
                <InfoContainer name='Gemelares' value='Nenhum'/>
                <InfoContainer name='Nascidos mortos' value='Nenhum'/>
                <InfoContainer name='Nascidos vivos' value='1'/>
            </S.LineContainer>
            <S.LineContainer>
                <InfoContainer name='RN peso entre 2500 e 4000' value='1'/>
                <InfoContainer name='RN peso menor que 2500' value='Nenhum'/>
                <InfoContainer name='RN peso maior que 4000' value='Nenhum'/>
            </S.LineContainer>
            <S.LineContainer>
                <InfoContainer name='Óbitos após a primeira semana' value='Nenhum'/>
                <InfoContainer name='Óbitos na primeira semana' value='Nenhum'/>
            </S.LineContainer>
            <S.LineContainer>
                <InfoContainer name='Diabetes' value='Não'/>
                <InfoContainer name='Cirurgia pélvica' value='Não'/>
                <InfoContainer name='Partos' value='1'/>
                <InfoContainer name='Partos vaginais' value='1'/>
                <InfoContainer name='Partos cesários' value='Nenhum'/>
            </S.LineContainer>
            <S.LineContainer>
                <InfoContainer name='Infecção urinária' value='Não'/>
                <InfoContainer name='Má formação congênita' value='Não'/>
                <InfoContainer name='Hipertensão' value='Não'/>
                <InfoContainer name='Familiar gêmeo' value='Não'/>
            </S.LineContainer>
        </S.ContentContainer>
    </S.Container>
  );
}
