export class Pedido {
    constructor() {
        this.itens = [];
        this.valorTotal = 0;
    }
    adicionarItens(item) {
        this.itens.push(item);
        this.valorTotal += item.valor;
    }
    mostrarPedido() {
        console.log(this.itens);
        console.log(`O valor total é de ${this.valorTotal}`);
    }
}
