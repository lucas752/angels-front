import { errorNotification } from '../../components/Notification';
import { api } from '../api';
import { FollowUpInterface } from './interface';

export const postAcompanhamento = async (
  gestanteId: number,
  data: FollowUpInterface
) => {
  try {
    const response = await api.post(`/acompanhamentos/${gestanteId}`, data);
    return response;
  } catch (error) {
    errorNotification('Erro ao cadastrar acompanhamento, tente novamente');
  }
};
