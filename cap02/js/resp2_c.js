const form = document.querySelector("form");
const retornoPromocao = document.getElementById("retornoPromocao");
const retornoProdutoDesconto = document.getElementById("retornoProdutoDesconto");

form.addEventListener("submit", (e) => {

    let produto = form.inProduto.value;
    let preco = Number(form.inPreco.value);
    let totalCompra = null;
    let produtoDesconto = null;

    produtoDesconto = preco / 2;
    totalCompra = (preco * 2) + produtoDesconto;

    retornoPromocao.innerText = `${produto} - Promoção: Leve 3 por R$: ${totalCompra.toFixed(2)}`;
    retornoProdutoDesconto.innerText = `O 3º produto custa apena R$: ${produtoDesconto.toFixed(2)}`;

    e.preventDefault();
});