import { Button } from 'antd';
import styled from 'styled-components';

export const ButtonArea = styled(Button)`
  background: white;
  color: var(--red-500);
  font-weight: 600;
  cursor: pointer;
  display: flex;
  align-items: center;
  border: none !important;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2); /* Adiciona uma sombra */
  padding: 10px 20px; /* Ajusta o espaçamento interno do botão */
  margin-top: 20px; /* Adiciona uma margem superior para espaçamento */
  &:hover {
    background: var(--red-600) !important; /* Altera a cor de fundo ao passar o mouse */
    border: none !important;
    color: white !important;
  }

`;