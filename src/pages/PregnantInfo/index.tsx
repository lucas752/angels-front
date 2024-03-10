import { useEffect, useState } from 'react';
import { InfoContainer } from './components/InfoContainer';
import * as S from './styles';

import { ArrowLeft, ArrowRight } from '@phosphor-icons/react';

import { GetPregnantInfo } from '../../services/PregnantServices';
interface PregantReposnseInterface {
  id?: number;
  nome?: string;
  dataNascimento?: string;
  cpf?: string;
  sexo?: string;
  municipio?: string;
  emRisco?: boolean;
  quantidadeAbortos?: number;
  quantidadeFilhosVivos?: number;
  quantidadeGemelares?: number;
  quantidadeGestacao?: number;
  quantidadeNascidosMortos?: number;
  quantidadeNascidosVivos?: number;
  hipertensao?: boolean;
  diabetes?: boolean;
  maFormacaoCongenita?: boolean;
}
export default function PregnantInfo() {
  const [pregnantInfo, setPregnantInfo] = useState<PregantReposnseInterface>();

  useEffect(() => {
    const getPregnantInfo = async () => {
      const response = await GetPregnantInfo(3);
      if (response?.status == 200) {
        setPregnantInfo(response.data);
      }
    };

    getPregnantInfo();
  }, []);

  console.log(pregnantInfo);

  return (
    <S.Container>
      <S.ContentContainer>
        <S.Title>Informações da gestante</S.Title>

        <S.ContentContainer>
          <S.LineContainer>
            <InfoContainer name="Nome" value={pregnantInfo?.nome} />
            <InfoContainer name="CPF" value={pregnantInfo?.cpf} />
          </S.LineContainer>
          <S.LineContainer>
            <InfoContainer
              name="Nascimento"
              value={pregnantInfo?.dataNascimento}
            />
            <InfoContainer name="Gênero" value={pregnantInfo?.sexo} />
          </S.LineContainer>
          <S.LineContainer>
            <InfoContainer name="Município" value={pregnantInfo?.municipio} />
            <InfoContainer
              name="Risco"
              value={pregnantInfo?.emRisco == true ? 'Sim' : 'Não'}
            />
            <InfoContainer
              name="Hipertesão"
              value={pregnantInfo?.hipertensao == true ? 'Sim' : 'Não'}
            />
            <InfoContainer
              name="Diabete"
              value={pregnantInfo?.diabetes == true ? 'Sim' : 'Não'}
            />
            <InfoContainer
              name="Má formação congênita"
              value={pregnantInfo?.maFormacaoCongenita == true ? 'Sim' : 'Não'}
            />
          </S.LineContainer>
          <S.LineContainer>
            <InfoContainer
              name="Abortos"
              value={pregnantInfo?.quantidadeAbortos?.toString()}
            />
            <InfoContainer
              name="Filhos Vivos"
              value={pregnantInfo?.quantidadeFilhosVivos?.toString()}
            />
            <InfoContainer
              name="Gemelares"
              value={pregnantInfo?.quantidadeGemelares?.toString()}
            />
            <InfoContainer
              name="Gestações"
              value={pregnantInfo?.quantidadeGestacao?.toString()}
            />
            <InfoContainer
              name="Nascidos vivos"
              value={pregnantInfo?.quantidadeNascidosVivos?.toString()}
            />
            <InfoContainer
              name="Nascidos mortos"
              value={pregnantInfo?.quantidadeNascidosMortos?.toString()}
            />
          </S.LineContainer>
        </S.ContentContainer>

        {/* <S.ButtonContainer>
          {page == 1 ? (
            <S.ArrowButton onClick={() => setPage(0)}>
              <ArrowLeft size={28} weight="bold" />
            </S.ArrowButton>
          ) : (
            <S.ArrowButton onClick={() => setPage(1)}>
              <ArrowRight size={28} weight="bold" />
            </S.ArrowButton>
          )}
        </S.ButtonContainer> */}
      </S.ContentContainer>
    </S.Container>
  );
}
