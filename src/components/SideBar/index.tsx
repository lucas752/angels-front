import React from 'react';
import { SidebarContainer, SidebarItem, TextItem } from './styles';
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
  return (
    <SidebarContainer>
      <SidebarItem>
        <img src={Logo} alt="Logo Angels" />

      </SidebarItem>

      <SidebarItem>
        <House size={37} color="#B1488A" />
        <TextItem>Home</TextItem>
      </SidebarItem>

      <SidebarItem>
        <Info size={37} color="#B1488A" />
        <TextItem>Sobre</TextItem>
      </SidebarItem>

      <SidebarItem>
        <ClipboardText size={37} color="#B1488A" />
        <TextItem>Dashboard</TextItem>
      </SidebarItem>

      <SidebarItem>
        <IdentificationBadge size={37} color="#B1488A" />
        <TextItem>Cadastro de Profissional</TextItem>
      </SidebarItem>

      <SidebarItem>
        <UserCircle size={37} color="#B1488A" />
        <TextItem>Cadastro de Gestante</TextItem>
      </SidebarItem>
    </SidebarContainer>
  );
};

export default SideBar;
