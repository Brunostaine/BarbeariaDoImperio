const qtdCart = document.getElementById("qtdCart");
console.log(qtdCart);

const listaProdutos = [
  {
    id: 01,
    nome: "Alisantte Silver Line",
    preço: 49.99,
    quantidade: 0,
  },
  {
    id: 02,
    nome: "Balm Universo For Man",
    preço: 49.99,
    quantidade: 0,
  },
  {
    id: 03,
    nome: "Secador Easy",
    preço: 49.99,
    quantidade: 0,
  },
];

function handleQtdCart() {
  let newQuantidadeCart = 0;
  for (let i = 0; i < listaProdutos.length; i++) {
    newQuantidadeCart += listaProdutos[i].quantidade;
  }
  return newQuantidadeCart
}

function comprar(id) {
  const produto = listaProdutos.find((element) => element.id == id);
  produto.quantidade++;
  const quantidade = handleQtdCart()
  console.log(quantidade);
  console.log(produto);
}
