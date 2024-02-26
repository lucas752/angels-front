import { z } from 'zod';

export const pregnantSchemaPartOne = z.object({
  name: z
    .string({
      required_error: 'Nome é obrigatório',
      invalid_type_error: 'Nome precisa conter letras'
    })
    .min(2, { message: 'Necessário mais de 2 caracteres' })
    .max(80, { message: 'Apenas 80 caracteres permitidos' }),
  birthDate: z.coerce
    .date({
      required_error: 'Data de nascimento é obrigatória'
    })
    .min(new Date('1900-01-01'), {
      message: 'Escolha um data depois de 1900-01-01'
    })
    .max(new Date(), { message: 'Escolha um data existente' }),
  race: z.string({
    required_error: 'Raça é obrigatória'
  }),
  gender: z.string({
    required_error: 'Gênero é obrigatório'
  }),
  cpf: z
    .string({
      required_error: 'CPF é obrigatório',
      invalid_type_error: 'CPF precisa ser uma string'
    })
    .length(11, { message: 'O CPF deve ter exatamente 11 caracteres' })
    .regex(/^\d+$/, { message: 'O CPF deve conter apenas dígitos numéricos' }),
  headOfHousehold: z.number({
    required_error: 'Chefe de família é obrigatório'
  }),
  maritalStatus: z.string({
    required_error: 'Estado civil é obrigatório'
  }),
  educationLevel: z.string({
    required_error: 'Nível de educação é obrigatório'
  }),
  familyIncome: z.string({
    required_error: 'Renda familiar é obrigatória',
    invalid_type_error: 'Renda familiar precisa ser válida'
  }),
  city: z
    .string({
      required_error: 'Cidade é obrigatória',
      invalid_type_error: 'Cidade precisa conter letras9'
    })
    .min(2, { message: 'Necessário mais de 2 caracteres' })
    .max(30, { message: 'Apenas 30 caracteres permitidos' }),
  housing: z.string({
    required_error: 'Tipo de moradia é obrigatório'
  }),
  electricity: z.number({
    required_error: 'Presença de eletricidade é obrigatória'
  }),
  sewageNetwork: z.number({
    required_error: 'Rede de esgoto é obrigatória'
  }),
  treatedWater: z.number({
    required_error: 'Água tratada é obrigatória'
  }),
  lastPregnancyDate: z.string({
    required_error: 'Data da última gravidez é obrigatória'
  }),
  wellFed: z.string({
    required_error: 'Alimentação adequada é obrigatória'
  }),
  breastfeeding: z.number({
    required_error: 'Amamentação é obrigatória'
  }),
  contact: z
    .string({
      required_error: 'Contato é obrigatório',
      invalid_type_error: 'Contato precisa ser válido'
    })
    .length(11, { message: 'O contato deve ter exatamente 11 caracteres' })
    .regex(/^\d+$/, {
      message: 'O contato deve conter apenas dígitos numéricos'
    }),
  emergencyContact: z
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
  abortions: z.string({
    required_error: 'Abortos é obrigatório',
    invalid_type_error: 'Abortos precisa conter números'
  }),
  liveChildren: z.string({
    required_error: 'Filhos vivos é obrigatório',
    invalid_type_error: 'Filhos vivos precisa conter números'
  }),
  twins: z.string({
    required_error: 'Gêmeos é obrigatório',
    invalid_type_error: 'Gêmeos precisa ser conter números'
  }),
  liveBirths: z.string({
    required_error: 'Nascimentos vivos é obrigatório',
    invalid_type_error: 'Nascimentos vivos precisa conter números'
  }),
  stillbirths: z.string({
    required_error: 'Natimortos é obrigatório',
    invalid_type_error: 'Natimortos precisa ser conter números'
  }),
  birthWeight25004000: z.string({
    required_error: 'Peso de nascimento entre 2500 e 4000g é obrigatório',
    invalid_type_error:
      'Peso de nascimento entre 2500 e 4000g precisa conter números'
  }),
  birthWeightlt2500: z.string({
    required_error: 'Peso de nascimento menor que 2500g é obrigatório',
    invalid_type_error:
      'Peso de nascimento menor que 2500g precisa conter números'
  }),
  birthWeightgt4000: z.string({
    required_error: 'Peso de nascimento maior que 4000g é obrigatório',
    invalid_type_error:
      'Peso de nascimento maior que 4000g precisa conter números'
  }),
  deathsFirstWeek: z.string({
    required_error: 'Mortes na primeira semana é obrigatório',
    invalid_type_error: 'Mortes na primeira semana precisa conter números'
  }),
  deathsAfterFirstWeek: z.string({
    required_error: 'Mortes após a primeira semana é obrigatório',
    invalid_type_error: 'Mortes após a primeira semana precisa conter números'
  }),
  diabetes: z.number({
    required_error: 'Diabetes é obrigatório'
  }),
  pelvicSurgery: z.number({
    required_error: 'Cirurgia pélvica é obrigatória'
  }),
  deliveries: z.string({
    required_error: 'Partos é obrigatório',
    invalid_type_error: 'Partos precisa conter números'
  }),
  vaginalDeliveries: z.string({
    required_error: 'Partos vaginais é obrigatório',
    invalid_type_error: 'Partos vaginais precisa conter números'
  }),
  cesareanDeliveries: z.string({
    required_error: 'Partos cesáreos é obrigatório',
    invalid_type_error: 'Partos cesáreos precisa conter números'
  }),
  urinaryInfection: z.number({
    required_error: 'Infecção urinária é obrigatória'
  }),
  congenitalMalformation: z.number({
    required_error: 'Malformação congênita é obrigatória'
  }),
  hypertension: z.number({
    required_error: 'Hipertensão é obrigatória'
  }),
  twinFamilyHistory: z.number({
    required_error: 'Histórico familiar de gêmeos é obrigatório'
  })
});
