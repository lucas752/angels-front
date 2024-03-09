import React from 'react';
import { SidebarContainer, SidebarItem, TextItem } from './styles';
import {
  UserCircle,
  SignOut,
  IdentificationBadge
} from '@phosphor-icons/react';

// importando a logo
import Logo from '../../assets/angelsLogo.svg';

const SideBar: React.FC = () => {
  return (
    <SidebarContainer>
      <SidebarItem>
        <img src={Logo} alt="Logo Angels" width={80} height={80} />
      </SidebarItem>

      <SidebarItem>
        <UserCircle size={40} color="#B1488A" />
        <TextItem>Nova Gestação</TextItem>
      </SidebarItem>

      <SidebarItem>
        <IdentificationBadge size={40} color="#B1488A" />
        <TextItem>Cadastro Profissional</TextItem>
      </SidebarItem>

      <SidebarItem>
        <SignOut size={40} color="#B1488A" />
        <TextItem>Sair</TextItem>
      </SidebarItem>
    </SidebarContainer>
  );
};

export default SideBar;
