import { Item } from "./itens";
import { Pedido } from "./pedido";

const item1 = new Item("Pão", 10, "Pão doce");
const item2 = new Item("Rolex", 50, "Invicta");
const item3 = new Item("tangerina", 100, "Laranja");

const pedido01 = new Pedido();
pedido01.mostrarPedido();
pedido01.adicionarItens(item1);
pedido01.adicionarItens(item2);
pedido01.adicionarItens(item3);
pedido01.mostrarPedido();
