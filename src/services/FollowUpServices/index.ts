import { errorNotification } from '../../components/Notification';
import { api } from '../api';

export const GetFollowUpsByPregnancyId = async (id: number) => {
  try {
    const response = await api.get(
      `acompanhamentos/listar-acompanhamento-por-gestao/${id}`
    );
    return response;
  } catch (error) {
    errorNotification('Erro ao buscar os acompanhamentos da gestação.');
  }
};
