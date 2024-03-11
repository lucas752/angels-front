export interface FollowUpInterface {
  gestacaoId: number | undefined;
  dataAcompanhamento: string | string[] | undefined;
  pesoAtual: number | undefined;
  idadeGestacional: number | undefined;
  pressaoArterial: string | undefined;
  batimentosCardiacosFeto: number | undefined;
  alturaUterina: number | undefined;
  tipo: string | undefined;
  realizadoPor: string | undefined;
  riscoIA: boolean | undefined;
}
