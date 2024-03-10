import { z } from 'zod';

export const PregnancyRegisterSchema = z.object({
  dataUltimaMenstruacao: z.coerce
    .date({
      required_error: 'Insira uma data',
      invalid_type_error: 'Insira uma data'
    })
    .min(new Date('1900-01-01'), {
      message: 'Insira uma data válida'
    })
    .max(new Date(), { message: 'Insira uma data válida' }),
  dataInicioGestacao: z.coerce
    .date({
      required_error: 'Insira uma data',
      invalid_type_error: 'Insira uma data'
    })
    .min(new Date('1900-01-01'), {
      message: 'Insira uma data válida'
    })
    .max(new Date(), { message: 'Insira uma data válida' }),
  pesoAntesGestacao: z
    .number({
      required_error: 'Insira o peso',
      invalid_type_error: 'Insira o peso'
    })
    .min(1, 'Insira o peso'),
  situacaoGestacional: z.number({
    required_error: 'Selecione a situação gestacional',
    invalid_type_error: 'Selecione a situação gestacional'
  }),
  riscoGestacional: z.number({
    required_error: 'Selecione o risco gestacional',
    invalid_type_error: 'Selecione o risco gestacional'
  }),
  grupoSanguineo: z.number({
    required_error: 'Selecione o grupo sanguíneo',
    invalid_type_error: 'Selecione o grupo sanguíneo'
  }),
  fatorRh: z
    .string({ required_error: 'Insira o Fator Rh' })
    .min(1, 'Insira o Fator Rh'),
  usoDrogas: z
    .number({
      required_error: 'Selecione o consumo de drogas',
      invalid_type_error: 'Selecione o consumo de drogas'
    })
    .min(0, 'Selecione o consumo de drogas'),
  fuma: z.boolean({ required_error: 'Selecione a opção fumante' }),
  consumoAlcool: z.boolean({
    required_error: 'Selecione o consumo de álcool'
  }),
  gravidezPlanejada: z.boolean({
    required_error: 'Selecione gravidez planejada '
  }),
  vacinaHepatiteB: z.boolean({
    required_error: 'Selecione vacina de hepatite B'
  }),
  frequenciaUsoAlcool: z.number().optional(),
  quantidadeCigarrosDia: z.number().optional()
});
