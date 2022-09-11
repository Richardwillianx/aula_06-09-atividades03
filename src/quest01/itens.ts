export class Item {
  valor: number;
  nome: string;
  descricao: string;

  constructor(nome: string, valor: number, descricao: string) {
    this.nome = nome;
    this.valor = valor;
    this.descricao = descricao;
  }
}
