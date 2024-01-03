const form = document.querySelector("form");
const retornoDescricao = document.querySelector("#retornoDescricao");
const retornoTotal = document.querySelector("#retornoTotal");

let descricao = '';
let numContas = 0;
let valorTotal = 0;

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const conta = form.inConta.value;
    const valor = Number(form.inValor.value);

    descricao = descricao + conta + ' - R$: ' + valor.toFixed(2) + '\n';
    numContas = numContas + 1;
    valorTotal = valorTotal + valor;

    retornoDescricao.innerText = `${descricao} -------------`;
    retornoTotal.innerText = `${numContas} Conta(s) - Total R$: ${valorTotal.toFixed(2)}\n`;

    form.inConta.value = "";
    form.inValor.value = "";
    form.inConta.focus();
});