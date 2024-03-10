import { errorNotification } from '../../components/Notification';
import { api } from '../api';

export const GetPregnancies = async () => {
  try {
    const response = await api.get(`/gestacoes`);
    return response;
  } catch (error) {
    errorNotification('Erro ao buscar gestantantes');
  }
};
