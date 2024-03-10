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

export const GetPregnantInfo = async (id: number) => {
  try {
    const response = await api.get(`/gestantes/${id}`);
    return response;
  } catch (error) {
    errorNotification('Erro ao buscar gestante, tente novamente.');
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

export const PutPregnant = async (id: number, data: PregnantInterface) => {
  try {
    const response = await api.put(`/gestantes/${id}`, data);
    return response;
  } catch (error) {
    errorNotification('Erro ao atualizar uma gestante, tente novamente.');
  }
};

export const DeletePregnant = async (id: number) => {
  try {
    const response = await api.delete(`/gestantes/${id}`);
    return response;
  } catch (error) {
    errorNotification('Erro ao deletar gestante, tente novamente.');
  }
};
