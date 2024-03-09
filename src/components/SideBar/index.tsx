import React, { useState } from 'react';
import { CpfModal, SidebarContainer, SidebarItem, TextItem } from './styles';
import { UserCircle, Power } from '@phosphor-icons/react';

// importando a logo
import Logo from '../../assets/angelsLogo.svg';
import { Input } from '../Input';
import { useNavigate } from 'react-router-dom';
import { GetPregnantByCpf } from '../../services/PregnantServices';
import { pregnantSchemaPartOne } from '../../services/types/PregnantType';
interface ErrorInterface {
  errorShow?: boolean;
  errorType?: '' | 'error' | 'warning' | undefined;
}

const SideBar: React.FC = () => {
  const navigate = useNavigate();

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const [cpf, setCpf] = useState<string>('');
  const [errorCpf, setErrorCpf] = useState<ErrorInterface>({
    errorType: '',
    errorShow: false
  });

  const handleChangeCpf = (e: { target: { value: string } }) => {
    const { value } = e.target;

    const inputValue = value.replace(/\D/g, '');
    try {
      pregnantSchemaPartOne.shape.cpf.parse(inputValue);
      setErrorCpf({ errorType: '', errorShow: false });
    } catch (error) {
      setErrorCpf({ errorType: 'error', errorShow: true });
    }
    setCpf(inputValue);
  };

  const getPregnantByCpf = async (cpf: string) => {
    console.log(cpf);
    const response = await GetPregnantByCpf(cpf);
    console.log(response);
  };

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    getPregnantByCpf(cpf);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const homeScreen = () => {
    navigate('/');
  };

  return (
    <SidebarContainer>
      <SidebarItem>
        <img src={Logo} alt="Logo Angels" />
      </SidebarItem>

      <SidebarItem onClick={showModal}>
        <UserCircle size={37} color="#B1488A" />
        <TextItem>Nova gestação</TextItem>
      </SidebarItem>

      <SidebarItem onClick={homeScreen}>
        <Power size={37} color="#B1488A" />
        <TextItem>Sair</TextItem>
      </SidebarItem>

      <CpfModal
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        okText="Verificar"
      >
        <label>Verifique se a gestante já está cadastrada no sistema</label>
        <Input
          label="Cpf"
          placeHolder="Digite o cpf da gestante"
          inputFunction={handleChangeCpf}
          type="text"
          value={cpf}
          errorShow={errorCpf?.errorShow}
          status={errorCpf?.errorType}
          infoText="O cpf precisa ser válido"
          color="#b1488a"
        />
      </CpfModal>
    </SidebarContainer>
  );
};

export default SideBar;
