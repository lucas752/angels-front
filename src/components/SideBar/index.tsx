import React, { useState } from 'react';
import { CpfModal, SidebarContainer, SidebarItem, TextItem } from './styles';
import {
  House,
  Info,
  UserCircle,
  ClipboardText,
  IdentificationBadge
} from '@phosphor-icons/react';

// importando a logo
import Logo from '../../assets/angelsLogo.svg';

const SideBar: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <SidebarContainer>
      <SidebarItem>
        <img src={Logo} alt="Logo Angels" />
      </SidebarItem>

      <SidebarItem>
        <IdentificationBadge size={37} color="#B1488A" />
        <TextItem>Cadastro de Profissional</TextItem>
      </SidebarItem>

      <SidebarItem onClick={showModal}>
        <UserCircle size={37} color="#B1488A" />
        <TextItem>Nova gestante</TextItem>
      </SidebarItem>
      <CpfModal open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        teste
      </CpfModal>
    </SidebarContainer>
  );
};

export default SideBar;
