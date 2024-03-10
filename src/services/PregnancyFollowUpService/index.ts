import { errorNotification } from '../../components/Notification';
import { api } from '../api';

export const postAcompanhamento = async (gestanteId: number, data: object) => {
  try {
    const response = await api.post(`/acompanhamentos/${gestanteId}`, data);
    return response;
  } catch (error) {
    errorNotification('Erro ao cadastrar acompanhamento, tente novamente');
  }
};
