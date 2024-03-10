import { useEffect, useState } from 'react';
import { InfoContainer } from './components/InfoContainer';
import * as S from './styles';
import { GetPregnantInfo } from '../../services/PregnantServices';
import {
  ArrowCircleLeft,
  PencilSimple,
  TrashSimple
} from '@phosphor-icons/react';
import moment from 'moment';
import { useNavigate } from 'react-router-dom';
import { Input } from '../../components/Input';
import { DateSelect } from '../../components/DateSelect';
import { Select } from '../../components/Select';
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
  const navigate = useNavigate();
  const [pregnantInfo, setPregnantInfo] = useState<PregantReposnseInterface>();
  const [isUptadeModalOpen, setIsUptadeModalOpen] = useState(false);

  const showUptadeModal = () => {
    setIsUptadeModalOpen(true);
  };

  const handleUptadeOk = () => {
    setIsUptadeModalOpen(false);
  };

  const handleCancel = () => {
    setIsUptadeModalOpen(false);
  };

  useEffect(() => {
    const getPregnantInfo = async () => {
      const response = await GetPregnantInfo(1);
      if (response?.status == 200) {
        setPregnantInfo(response.data);
      }
    };

    getPregnantInfo();
  }, []);

  const dashBoardScreen = () => {
    navigate('/dashboard');
  };

  return (
    <S.Container>
      <S.ContentContainer>
        <S.TitleContainer>
          <ArrowCircleLeft
            size={32}
            weight="bold"
            color="#7c3a66"
            onClick={dashBoardScreen}
          />
          <S.Title>Informações da gestante</S.Title>
          <section>
            <PencilSimple
              size={32}
              weight="bold"
              color="#7c3a66"
              onClick={showUptadeModal}
            />
            <TrashSimple size={32} weight="bold" color="#7c3a66" />
          </section>
        </S.TitleContainer>
        <S.ContentContainer>
          <S.LineContainer>
            <InfoContainer name="Nome" value={pregnantInfo?.nome} />
            <InfoContainer name="CPF" value={pregnantInfo?.cpf} />
          </S.LineContainer>
          <S.LineContainer>
            <InfoContainer
              name="Nascimento"
              value={moment(pregnantInfo?.dataNascimento).format('DD/MM/YYYY')}
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
        <S.UpdateModal
          open={isUptadeModalOpen}
          onOk={handleUptadeOk}
          onCancel={handleCancel}
          title="Atualizar dados da gestante"
        >
          <Input label="Nome:" />
          <DateSelect label="Data de nascimento" />
          <Input label="Cpf:" />
          <Select label="Sexo:" />
          <Select label="Raça:" />
        </S.UpdateModal>
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
