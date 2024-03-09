import { errorNotification } from '../../components/Notification';
import { api } from '../api';
import { PregnantInterface } from '../types/PregnantType';

export const GetPregnantByCpf = async (cpf: string) => {
  try {
    const response = await api.get(`/gestantes/cpf/${cpf}`);
    return response;
  } catch (error) {
    errorNotification('Erro ao buscar gestante pelo cpf, tente novamente.');
  }
};

export const PostPregnant = async (data: PregnantInterface) => {
  try {
    const response = await api.post(`/gestantes`, data);
    return response;
  } catch (error) {
    errorNotification('Erro ao cadastrar uma gestante, tente novamente.');
  }
};
