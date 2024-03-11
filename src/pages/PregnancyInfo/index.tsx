import {
  ArrowCircleDown,
  ArrowCircleUp,
  ArrowUUpLeft,
  PlusCircle
} from '@phosphor-icons/react';
import * as S from './styles.ts';
import { PregnantPersonalInfo } from '../../features/Pregnancies/PregnantPersonalInfo/index.tsx';
import { FollowUpCard } from '../../components/FollowUpCard/index.tsx';
import { GetFollowUpsByPregnancyId } from '../../services/FollowUpServices/index.ts';
import { useEffect, useState } from 'react';
import { GetPregnantInfo } from '../../services/PregnantServices/index.ts';
import { GetPregnancyById } from '../../services/PregnancyServices/index.ts';
import { useNavigate, useParams } from 'react-router-dom';

interface FollowUpResponseInterface {
  id: number;
  dataAcompanhamento: string;
  realizadoPor: string;
  pesoAtual: number;
  idadeGestacional: number;
  pressaoArterial: string;
  batimentosCardiacosFeto: number;
  alturaUterina: number;
  tipo: string;
}

interface PregnancyResponseInterface {
  id: number;
  gestante_id: number;
  consumoAlcool: boolean;
  frequenciaUsoAlcool: number;
  dataUltimaMenstruacao: string | null;
  dataInicioGestacao: string | null;
  fatorRh: string | null;
  fuma: boolean;
  quantidadeCigarrosDia: number;
  usoDrogas: number;
  gravidezPlanejada: boolean;
  grupoSanguineo: number;
  pesoAntesGestacao: number | null;
  riscoGestacional: number;
  vacinaHepatiteB: boolean;
  situacaoGestacional: number;
}

export default function PregnancyInfo() {
  const [followUpInfo, setFollowUpInfo] = useState<FollowUpResponseInterface[]>(
    []
  );
  const [pregnancyInfo, setPregnancyInfo] =
    useState<PregnancyResponseInterface>();
  const [name, setName] = useState<string>('');
  const [cpf, setCpf] = useState<string>('');
  const [toggleInfo, setToggleInfo] = useState(false);
  const params = useParams();
  const navigate = useNavigate();

  const pregnantId = Number(params?.pregnantId);
  const pregnancyId = Number(params?.pregnancyId);

  useEffect(() => {
    const getFollowUps = async () => {
      const response = await GetFollowUpsByPregnancyId(pregnancyId);
      if (response?.status == 200) {
        setFollowUpInfo(response.data);
      }
    };

    const getPregnantInfo = async () => {
      const response = await GetPregnantInfo(pregnantId);
      if (response?.status == 200) {
        setName(response.data.nome);
        setCpf(response.data.cpf);
      }
    };

    const getPregnacyInfo = async () => {
      const response = await GetPregnancyById(pregnancyId);
      if (response?.status == 200) {
        setPregnancyInfo(response.data);
      }
    };

    getPregnantInfo();
    getFollowUps();
    getPregnacyInfo();
  }, []);

  const toggleShowInfos = () => {
    setToggleInfo(!toggleInfo);
  };

  const handleBackArrow = () => {
    navigate(`/pregnancies/${pregnantId}`);
  };

  const handleNewPregnancy = () => {
    navigate(`/pregnancyRegister/${pregnantId}`);
  };

  return (
    <S.Container>
      <S.Header>
        <section>
          <ArrowUUpLeft
            size={22}
            color="#B1488A"
            onClick={handleBackArrow}
            cursor={'Pointer'}
            weight="bold"
          />
          <S.PregnanciesText>
            GESTAÇÕES {'>'} Gestação {pregnancyId}
          </S.PregnanciesText>
        </section>
        <S.NewPregnancyButton onClick={handleNewPregnancy}>
          <PlusCircle size={18} weight="bold" />
          NOVA GESTAÇÃO
        </S.NewPregnancyButton>
      </S.Header>
      <S.PregnantInfoContainer>
        <PregnantPersonalInfo name="Nome" value={name} />
        <PregnantPersonalInfo name="CPF" value={cpf} />
      </S.PregnantInfoContainer>
      {toggleInfo ? (
        <ArrowCircleUp
          size={25}
          cursor={'Pointer'}
          color="#B1488A"
          weight="bold"
          onClick={toggleShowInfos}
        />
      ) : (
        <ArrowCircleDown
          size={25}
          cursor={'Pointer'}
          color="#B1488A"
          weight="bold"
          onClick={toggleShowInfos}
        />
      )}
      {toggleInfo ? (
        <S.PregnancyInfo>
          <S.LineContainer>
            <S.InfoPregnancyContainer>
              <S.InfoPregnancyTitleText>
                Última menstruação
              </S.InfoPregnancyTitleText>
              <S.InfoPregnancyValueText>
                {pregnancyInfo?.dataUltimaMenstruacao
                  ? new Date(
                      pregnancyInfo?.dataUltimaMenstruacao
                    ).toLocaleDateString()
                  : 'Sem dados'}
              </S.InfoPregnancyValueText>
            </S.InfoPregnancyContainer>
            <S.InfoPregnancyContainer>
              <S.InfoPregnancyTitleText>
                Inicio da gestação
              </S.InfoPregnancyTitleText>
              <S.InfoPregnancyValueText>
                {pregnancyInfo?.dataInicioGestacao
                  ? new Date(
                      pregnancyInfo?.dataInicioGestacao
                    ).toLocaleDateString()
                  : 'Sem dados'}
              </S.InfoPregnancyValueText>
            </S.InfoPregnancyContainer>
            <S.InfoPregnancyContainer>
              <S.InfoPregnancyTitleText>
                Gravidez planejada
              </S.InfoPregnancyTitleText>
              <S.InfoPregnancyValueText>
                {pregnancyInfo?.gravidezPlanejada ? 'Sim' : 'Não'}
              </S.InfoPregnancyValueText>
            </S.InfoPregnancyContainer>
            <S.InfoPregnancyContainer>
              <S.InfoPregnancyTitleText>Fuma</S.InfoPregnancyTitleText>
              <S.InfoPregnancyValueText>
                {pregnancyInfo?.fuma ? 'Sim' : 'Não'}
              </S.InfoPregnancyValueText>
            </S.InfoPregnancyContainer>
            <S.InfoPregnancyContainer>
              <S.InfoPregnancyTitleText>
                Cigarros por dia
              </S.InfoPregnancyTitleText>
              <S.InfoPregnancyValueText>
                {pregnancyInfo?.quantidadeCigarrosDia}
              </S.InfoPregnancyValueText>
            </S.InfoPregnancyContainer>
          </S.LineContainer>
          <S.LineContainer>
            <S.InfoPregnancyContainer>
              <S.InfoPregnancyTitleText>
                Consumo de Álcool
              </S.InfoPregnancyTitleText>
              <S.InfoPregnancyValueText>
                {pregnancyInfo?.consumoAlcool ? 'Sim' : 'Não'}
              </S.InfoPregnancyValueText>
            </S.InfoPregnancyContainer>
            <S.InfoPregnancyContainer>
              <S.InfoPregnancyTitleText>
                Frequência Consumo de Álcool
              </S.InfoPregnancyTitleText>
              <S.InfoPregnancyValueText>
                {pregnancyInfo?.frequenciaUsoAlcool}
              </S.InfoPregnancyValueText>
            </S.InfoPregnancyContainer>
            <S.InfoPregnancyContainer>
              <S.InfoPregnancyTitleText>Uso de drogas</S.InfoPregnancyTitleText>
              <S.InfoPregnancyValueText>
                {pregnancyInfo?.usoDrogas ? 'Sim' : 'Não'}
              </S.InfoPregnancyValueText>
            </S.InfoPregnancyContainer>
            <S.InfoPregnancyContainer>
              <S.InfoPregnancyTitleText>
                Grupo Sanguíneo
              </S.InfoPregnancyTitleText>
              <S.InfoPregnancyValueText>
                {pregnancyInfo?.grupoSanguineo == 0
                  ? 'O'
                  : pregnancyInfo?.grupoSanguineo == 1
                  ? 'A'
                  : pregnancyInfo?.grupoSanguineo == 2
                  ? 'B'
                  : pregnancyInfo?.grupoSanguineo == 3
                  ? 'AB'
                  : 'Sem dados'}
              </S.InfoPregnancyValueText>
            </S.InfoPregnancyContainer>
            <S.InfoPregnancyContainer>
              <S.InfoPregnancyTitleText>Fator RH</S.InfoPregnancyTitleText>
              <S.InfoPregnancyValueText>
                {pregnancyInfo?.fatorRh}
              </S.InfoPregnancyValueText>
            </S.InfoPregnancyContainer>
          </S.LineContainer>
          <S.LineContainer>
            <S.InfoPregnancyContainer>
              <S.InfoPregnancyTitleText>
                Peso antes da gestação
              </S.InfoPregnancyTitleText>
              <S.InfoPregnancyValueText>
                {pregnancyInfo?.pesoAntesGestacao} kg
              </S.InfoPregnancyValueText>
            </S.InfoPregnancyContainer>
            <S.InfoPregnancyContainer>
              <S.InfoPregnancyTitleText>
                Risco Gestacional
              </S.InfoPregnancyTitleText>
              <S.InfoPregnancyValueText>
                {pregnancyInfo?.riscoGestacional == 0
                  ? 'Alto'
                  : pregnancyInfo?.riscoGestacional == 1
                  ? 'Habitual'
                  : 'Não informado'}
              </S.InfoPregnancyValueText>
            </S.InfoPregnancyContainer>
            <S.InfoPregnancyContainer>
              <S.InfoPregnancyTitleText>
                Vacina Hepatite B
              </S.InfoPregnancyTitleText>
              <S.InfoPregnancyValueText>
                {pregnancyInfo?.vacinaHepatiteB ? 'Sim' : 'Não'}
              </S.InfoPregnancyValueText>
            </S.InfoPregnancyContainer>
            <S.InfoPregnancyContainer>
              <S.InfoPregnancyTitleText>
                Situação Gestacional
              </S.InfoPregnancyTitleText>
              <S.InfoPregnancyValueText>
                {pregnancyInfo?.situacaoGestacional == 0
                  ? 'Em andamento'
                  : pregnancyInfo?.situacaoGestacional == 1
                  ? 'Finalizada com sucesso'
                  : pregnancyInfo?.situacaoGestacional
                  ? 'Finalizada com desfecho negativo'
                  : 'Sem dados'}
              </S.InfoPregnancyValueText>
            </S.InfoPregnancyContainer>
          </S.LineContainer>
        </S.PregnancyInfo>
      ) : (
        <></>
      )}

      <S.PregnanciesText>Acompanhamentos: </S.PregnanciesText>
      {followUpInfo.map((item, index) => (
        <FollowUpCard
          key={index}
          bloodPressure={item.pressaoArterial}
          date={new Date(item.dataAcompanhamento).toLocaleDateString()}
          gestationalAge={item.idadeGestacional}
          heartRate={item.batimentosCardiacosFeto}
          madeBy={item.realizadoPor}
          type={item.tipo}
          uterineHeight={item.alturaUterina}
          weight={item.pesoAtual}
        />
      ))}
    </S.Container>
  );
}
