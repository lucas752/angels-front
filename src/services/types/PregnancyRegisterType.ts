import { z } from 'zod';

export const PregnancyRegisterSchema = z.object({
  period: z.coerce
    .date({
      required_error: 'Insira uma data'
    })
    .min(new Date('1900-01-01'), {
      message: 'Insira uma data válida'
    })
    .max(new Date(), { message: 'Insira uma data válida' }),
  begining: z.coerce
    .date({ required_error: 'Insira uma data' })
    .min(new Date('1900-01-01'), {
      message: 'Insira uma data válida'
    })
    .max(new Date(), { message: 'Insira uma data válida' }),
  weight: z.string({ required_error: 'Insira o peso' }).min(1, 'Insira o peso'),
  situation: z.enum(['1', '2', '3', '4'], {
    required_error: 'Selecione a situação gestacional'
  }),
  risc: z.enum(['1', '2', '3', '4'], {
    required_error: 'Selecione o risco gestacional'
  }),
  blood: z.enum(['A', 'B', 'AB', 'O'], {
    required_error: 'Selecione o grupo sanguíneo'
  }),
  rh: z.number({ required_error: 'Fator Rh é obrigatório' }),
  planned: z.number({ required_error: 'Gravidez planejada é obrigatório' }),
  hepB: z.number({ required_error: 'Vacina de hepatite B é obrigatório' }),
  drugs: z.number({ required_error: 'Consumo de drogas é obrigatório' }),
  smoke: z.number({ required_error: 'Fumante é obrigatório' }),
  alcohol: z.number({ required_error: 'Consumo de álcool é obrigatório' }),
  qtdAlcohol: z.string().optional(),
  qtdCigarrets: z.string().optional()
});
