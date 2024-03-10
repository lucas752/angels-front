import { z } from 'zod';

export const PregnancyFollowUpSchema = z.object({
  dataAcompanhamento: z.coerce
    .date({ required_error: 'Informe a data' })
    .min(new Date('1900-01-01'), { message: 'Escolha uma data válida' })
    .max(new Date(), { message: 'Escolha uma data válida' }),
  pesoAtual: z
    .string({ required_error: 'Informe o peso' })
    .min(1, 'Informe o peso'),
  idadeGestacional: z
    .string({ required_error: 'Informe a idade gestacional' })
    .min(1, 'Informe a idade gestacional'),
  pressaoArterial: z
    .string({ required_error: 'Informe a pressão arterial' })
    .min(2, 'Informe a pressão arterial'),
  alturaUterina: z.string().optional(),
  batimentosCardiacosFeto: z.number().optional(),
  tipo: z.enum(['pré-natal de rotina', 'ocorrência', 'volta'], {
    required_error: 'Selecione um tipo'
  }),
  realizadoPor: z.string({ required_error: 'Selecione uma opção' })
});
