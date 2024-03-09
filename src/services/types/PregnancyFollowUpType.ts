import { z } from 'zod';

export const PregnancyFollowUpSchema = z.object({
  date: z.coerce
    .date({ required_error: 'Informe a data' })
    .min(new Date('1900-01-01'), { message: 'Escolha uma data válida' })
    .max(new Date(), { message: 'Escolha uma data válida' }),
  weight: z
    .string({ required_error: 'Informe o peso' })
    .min(1, 'Informe o peso'),
  weeks: z
    .string({ required_error: 'Informe a idade gestacional' })
    .min(1, 'Informe a idade gestacional'),
  pressureD: z.number({ required_error: 'Informe a pressão arterial' }),
  pressureS: z.number({ required_error: 'Informe a pressão arterial' }),
  height: z.string().optional(),
  heartbeat: z.number().optional(),
  type: z.enum(['pré-natal de rotina', 'ocorrência', 'volta'], {
    required_error: 'Selecione um tipo'
  }),
  radio: z.number({ required_error: 'Selecione uma opção' })
});
