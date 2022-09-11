{
    throw 'Pegadinha do malandro!';
}
recuperarValorTotal();
number;
{ }
;
{
    const index = this.itens.findIndex((i) => i.nome === item);
    if (index > -1) {
        this.itens.splice(index, 1);
    }
}
class Pedido {
    constructor() {
        this.itens = [];
    }
    adicionarItens(item1) {
        throw new Error("Method not implemented.");
    }
    mostrarPedido() {
        throw new Error("Method not implemented.");
    }
    add(item) {
        this.itens.push(item);
    }
    recuperarValorTotal() {
        let total = this.itens
            .map((i) => i.recuperarValorTotal())
            .reduce((sum, v) => sum + v, 0);
        return total;
    }
    aplicarDescontoEmPorcentagem(desconto) {
        const porcentagem = desconto / 100;
        const descontoEmReais = this.valor * porcentagem;
        this.valor -= descontoEmReais;
    }
}
class ItemPedido extends ValorPedido, Desconto {
    constructor(valor, nome, quantidade) {
        this.valor = valor;
        this.nome = nome;
        this.quantidade = quantidade;
    }
    recuperarValorTotal() {
        return this.valor * this.quantidade;
    }
    aplicarDescontoEmReais(desconto) {
        this.valor -= desconto;
    }
}
export {};
