import { errorNotification } from '../../components/Notification';
import { api } from '../api';

export const GetPregnantByCpf = async (cpf: string) => {
  try {
    const response = await api.get(`/gestantes/cpf/${cpf}`);
    return response;
  } catch (error) {
    errorNotification('Erro ao buscar gestante pelo cpf, tente novamente.');
  }
};

export const PostPregnant = async () => {};
