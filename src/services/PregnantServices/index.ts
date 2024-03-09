import { errorNotification } from '../../components/Notification';
import { API } from '../api';

export const GetPregnantByCpf = async (cpf: string) => {
  console.log(cpf);
  try {
    console.log(cpf);
    const response = await API.get(`/gestantes/cpf/${cpf}`);
    return response;
  } catch (error) {
    errorNotification('Erro ao buscar gestante pelo cpf, tente novamente.');
  }
};
