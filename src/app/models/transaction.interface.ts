export interface Transaction {
  id: number;
  descricao: string;
  data: Date;
  valor: number;
  avulso: boolean;
  status: boolean;
}
