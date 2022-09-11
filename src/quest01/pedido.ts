import { Item } from "./itens";

export class Pedido {
  itens: Item[] = [];
  valorTotal: number = 0;

  adicionarItens(item: Item) {
    this.itens.push(item);
    this.valorTotal += item.valor;
  }

  mostrarPedido() {
    console.log(this.itens);
    console.log(`O valor total é de ${this.valorTotal}`);
  }
}
