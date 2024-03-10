import {
  errorNotification,
  successNotification
} from '../../components/Notification';
import { api } from '../api';
import { PregnancyRegisterInterface } from './interface';

export const postGestacao = async (
  gestanteId: number,
  gestacao: PregnancyRegisterInterface
) => {
  try {
    const response = await api.post(`/gestacoes/${gestanteId}`, gestacao);
    successNotification('Gestação cadastrada com sucesso');
    return response;
  } catch (error) {
    errorNotification('Erro ao cadastrar gestação, tente novamente');
  }
};
