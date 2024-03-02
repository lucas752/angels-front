import { z } from 'zod';

export const PregnancyRegisterType = z.object({
  date: z.string({ required_error: 'Informe a data' }),
  weight: z.number({ required_error: 'Informe o peso' }),
  age: z.number({ required_error: 'Informe a idade gestacional' }),
  pressureD: z.number({ required_error: 'Informe a pressão arterial' }),
  pressureS: z.number({ required_error: 'Informe a pressão arterial' }),
  heigth: z.number({ required_error: 'Informe a altura uterina' }),
  hearthbeat: z.number().optional(),
  type: z.enum(['pré-natal de rotina', 'ocorrência', 'volta']),
  radio: z.number({ required_error: 'Selecione uma opção' })
});
