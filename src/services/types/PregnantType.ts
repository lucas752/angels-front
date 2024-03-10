import { z } from 'zod';

export interface PregnantInterface {
  id?: number;
  gestante?: PregnantInfoInterface;
  dadosEvolutivos?: EvolutionDataInterface;
}

export interface PregnantInfoInterface {
  id?: number;
  nome?: string;
  dataNascimento?: string;
  cpf?: string;
  raca?: number;
  sexo?: string;
}

export interface EvolutionDataInterface {
  id?: number;
  gestante?: PregnantInfoInterface;
  municipio?: string;
  diagnosticoDesnutricao?: number;
  energiaEletricaDomicilio?: boolean;
  escolaridade?: number;
  tipoMoradia?: number;
  moradiaRedeEsgoto?: boolean;
  rendaFamiliar?: number;
  tratamentoAgua?: boolean;
  amamentacao?: boolean;
  chefeFamilia?: string;
  dataUltimaGestacao?: string;
  emRisco?: boolean;
  estadoCivil?: number;
  quantidadeAbortos?: number;
  quantidadeFilhosVivos?: number;
  quantidadeGemelares?: number;
  quantidadeGestacao?: number;
  quantidadeNascidosMortos?: number;
  quantidadeNascidosVivos?: number;
  quantidadeObitosSemana1?: number;
  quantidadeObitosAposSemana1?: number;
  quantidadePartos?: number;
  quantidadePartosCesarios?: number;
  quantidadePartosVaginais?: number;
  quantidadeRnPeso2500_4000?: number;
  quantidadeRnPesoMaior4000?: number;
  quantidadeRnPesoMenor2500?: number;
  hipertensao?: boolean;
  diabetes?: boolean;
  cirurgiaPelvica?: boolean;
  infeccaoUrinaria?: boolean;
  maFormacaoCongenita?: boolean;
  familiarGemeos?: boolean;
  contato?: string;
  contatoEmergencia?: string;
}

export const pregnantSchemaPartOne = z.object({
  nome: z
    .string({
      required_error: 'Nome é obrigatório',
      invalid_type_error: 'Nome precisa conter letras'
    })
    .min(2, { message: 'Necessário mais de 2 caracteres' })
    .max(80, { message: 'Apenas 80 caracteres permitidos' }),
  dataNascimento: z.coerce
    .date({
      required_error: 'Data de nascimento é obrigatória',
      invalid_type_error: 'A data precisa ser válida'
    })
    .min(new Date('1900-01-01'), {
      message: 'Escolha um data depois de 1900-01-01'
    })
    .max(new Date(), { message: 'Escolha um data existente' }),
  raca: z.string({
    required_error: 'Raça é obrigatória'
  }),
  sexo: z.string({
    required_error: 'Gênero é obrigatório'
  }),
  cpf: z
    .string({
      required_error: 'CPF é obrigatório',
      invalid_type_error: 'CPF precisa ser uma string'
    })
    .length(11, { message: 'O CPF deve ter exatamente 11 caracteres' })
    .regex(/^\d+$/, { message: 'O CPF deve conter apenas dígitos numéricos' }),
  chefeFamilia: z.number({
    required_error: 'Chefe de família é obrigatório'
  }),
  estadoCivil: z.string({
    required_error: 'Estado civil é obrigatório'
  }),
  escolaridade: z.string({
    required_error: 'Nível de educação é obrigatório'
  }),
  rendaFamiliar: z.string({
    required_error: 'Renda familiar é obrigatória',
    invalid_type_error: 'Renda familiar precisa ser válida'
  }),
  municipio: z
    .string({
      required_error: 'Cidade é obrigatória',
      invalid_type_error: 'Cidade precisa conter letras9'
    })
    .min(2, { message: 'Necessário mais de 2 caracteres' })
    .max(30, { message: 'Apenas 30 caracteres permitidos' }),
  tipoMoradia: z.string({
    required_error: 'Tipo de moradia é obrigatório'
  }),
  energiaEletricaDomicilio: z.boolean({
    required_error: 'Presença de eletricidade é obrigatória'
  }),
  moradiaRedeEsgoto: z.boolean({
    required_error: 'Rede de esgoto é obrigatória'
  }),
  tratamentoAgua: z.boolean({
    required_error: 'Água tratada é obrigatória'
  }),

  diagnosticoDesnutricao: z.string({
    required_error: 'Alimentação adequada é obrigatória'
  }),
  amamentacao: z.boolean({
    required_error: 'Amamentação é obrigatória'
  }),
  contato: z
    .string({
      required_error: 'Contato é obrigatório',
      invalid_type_error: 'Contato precisa ser válido'
    })
    .length(11, { message: 'O contato deve ter exatamente 11 caracteres' })
    .regex(/^\d+$/, {
      message: 'O contato deve conter apenas dígitos numéricos'
    }),
  contatoEmergencia: z
    .string({
      required_error: 'Contato de emergência é obrigatório',
      invalid_type_error: 'Contato de emergência ser válido'
    })
    .length(11, {
      message: 'O contato de emergência deve ter exatamente 11 caracteres'
    })
    .regex(/^\d+$/, {
      message: 'O contato de emergência deve conter apenas dígitos numéricos'
    })
});

export const pregnantSchemaPartTwo = z.object({
  // Segunda parte
  dataUltimaGestacao: z.string({
    required_error: 'Data da última gravidez é obrigatória'
  }),
  quantidadeAbortos: z
    .string({
      required_error: 'Abortos é obrigatório',
      invalid_type_error: 'Abortos precisa conter números'
    })
    .regex(/^\d+$/, {
      message: 'O Campo "Abortos" deve conter apenas dígitos numéricos'
    }),
  quantidadeFilhosVivos: z
    .string({
      required_error: 'Filhos vivos é obrigatório',
      invalid_type_error: 'Filhos vivos precisa conter números'
    })
    .regex(/^\d+$/, {
      message: 'O Campo "Filhos vivos" deve conter apenas dígitos numéricos'
    }),
  quantidadeGemelares: z
    .string({
      required_error: 'Gêmeos é obrigatório',
      invalid_type_error: 'Gêmeos precisa ser conter números'
    })
    .regex(/^\d+$/, {
      message: 'O Campo "Gemelares" deve conter apenas dígitos numéricos'
    }),
  quantidadeNascidosVivos: z
    .string({
      required_error: 'Nascimentos vivos é obrigatório',
      invalid_type_error: 'Nascimentos vivos precisa conter números'
    })
    .regex(/^\d+$/, {
      message: 'O Campo "Nascidos vivos" deve conter apenas dígitos numéricos'
    }),
  quantidadeNascidosMortos: z
    .string({
      required_error: 'Natimortos é obrigatório',
      invalid_type_error: 'Natimortos precisa ser conter números'
    })
    .regex(/^\d+$/, {
      message: 'O Campo "Nascidos mortos" deve conter apenas dígitos numéricos'
    }),
  quantidadeRnPeso2500_4000: z
    .string({
      required_error: 'Peso de nascimento entre 2500 e 4000g é obrigatório',
      invalid_type_error:
        'Peso de nascimento entre 2500 e 4000g precisa conter números'
    })
    .regex(/^\d+$/, {
      message:
        'O Campo "Peso de nascimento entre 2500 e 4000g" deve conter apenas dígitos numéricos'
    }),
  quantidadeRnPesoMenor2500: z
    .string({
      required_error: 'Peso de nascimento menor que 2500g é obrigatório',
      invalid_type_error:
        'Peso de nascimento menor que 2500g precisa conter números'
    })
    .regex(/^\d+$/, {
      message:
        'O Campo "Peso de nascimento menor que 2500g" deve conter apenas dígitos numéricos'
    }),
  quantidadeRnPesoMaior4000: z
    .string({
      required_error: 'Peso de nascimento maior que 4000g é obrigatório',
      invalid_type_error:
        'Peso de nascimento maior que 4000g precisa conter números'
    })
    .regex(/^\d+$/, {
      message:
        'O Campo "Peso de nascimento maior que 4000g" deve conter apenas dígitos numéricos'
    }),
  quantidadeObitosSemana1: z
    .string({
      required_error: 'Mortes na primeira semana é obrigatório',
      invalid_type_error: 'Mortes na primeira semana precisa conter números'
    })
    .regex(/^\d+$/, {
      message:
        'O Campo "Óbitos na primeira semana" deve conter apenas dígitos numéricos'
    }),
  quantidadeObitosAposSemana1: z
    .string({
      required_error: 'Mortes após a primeira semana é obrigatório',
      invalid_type_error: 'Mortes após a primeira semana precisa conter números'
    })
    .regex(/^\d+$/, {
      message:
        'O Campo "Óbitos após primeira semana" deve conter apenas dígitos numéricos'
    }),
  diabetes: z.boolean({
    required_error: 'Diabetes é obrigatório'
  }),
  cirurgiaPelvica: z.boolean({
    required_error: 'Cirurgia pélvica é obrigatória'
  }),
  quantidadePartos: z
    .string({
      required_error: 'Partos é obrigatório',
      invalid_type_error: 'Partos precisa conter números'
    })
    .regex(/^\d+$/, {
      message: 'O Campo "Partos" deve conter apenas dígitos numéricos'
    }),
  quantidadePartosVaginais: z
    .string({
      required_error: 'Partos vaginais é obrigatório',
      invalid_type_error: 'Partos vaginais precisa conter números'
    })
    .regex(/^\d+$/, {
      message: 'O Campo "Partos vaginais" deve conter apenas dígitos numéricos'
    }),
  quantidadePartosCesarios: z
    .string({
      required_error: 'Partos cesáreos é obrigatório',
      invalid_type_error: 'Partos cesáreos precisa conter números'
    })
    .regex(/^\d+$/, {
      message: 'O Campo "Partos cesáreos" deve conter apenas dígitos numéricos'
    }),
  infeccaoUrinaria: z.boolean({
    required_error: 'Infecção urinária é obrigatória'
  }),
  maFormacaoCongenita: z.boolean({
    required_error: 'Malformação congênita é obrigatória'
  }),
  hipertensao: z.boolean({
    required_error: 'Hipertensão é obrigatória'
  }),
  familiarGemeos: z.boolean({
    required_error: 'Histórico familiar de gêmeos é obrigatório'
  })
});

export const pregnantSchemaPartTwoFirstPregnant = z.object({
  // Segunda parte

  quantidadeAbortos: z
    .string({
      required_error: 'Abortos é obrigatório',
      invalid_type_error: 'Abortos precisa conter números'
    })
    .regex(/^\d+$/, {
      message: 'O Campo "Abortos" deve conter apenas dígitos numéricos'
    }),
  diabetes: z.boolean({
    required_error: 'Diabetes é obrigatório'
  }),
  cirurgiaPelvica: z.boolean({
    required_error: 'Cirurgia pélvica é obrigatória'
  }),

  infeccaoUrinaria: z.boolean({
    required_error: 'Infecção urinária é obrigatória'
  }),
  maFormacaoCongenita: z.boolean({
    required_error: 'Malformação congênita é obrigatória'
  }),
  hipertensao: z.boolean({
    required_error: 'Hipertensão é obrigatória'
  }),
  familiarGemeos: z.boolean({
    required_error: 'Histórico familiar de gêmeos é obrigatório'
  })
});
