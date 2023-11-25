const form = document.querySelector("form");
const retornoVeiculo = document.getElementById("retornoVeiculo");
const retornoPromocao = document.getElementById("retornoPromocao");

form.addEventListener("submit", (e) => {

    const veiculo = form.inVeiculo.value;
    const preco = Number(form.inPreco.value);
    let entrada = null;
    let parcelas = null;

    entrada = preco / 2;
    parcelas = entrada / 12;

    retornoVeiculo.innerText = `Promoção: ${veiculo}`;
    retornoPromocao.innerText = `Entrada de R$ ${entrada.toFixed(2)} \n +12x de R$ ${parcelas.toFixed(2)}`;

    e.preventDefault();
});

// console.log(entrada, typeof entrada);
// console.log(parcelas, typeof parcelas);