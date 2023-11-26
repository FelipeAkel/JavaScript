const form = document.querySelector("form");
const retornoMedicamento = document.getElementById("retornoMedicamento");
const retornoValorTotal = document.getElementById("retornoValorTotal");

form.addEventListener("submit", (e) => {
    let medicamento = form.inMedicamento.value;
    let preco = Number(form.inPreco.value);
    let valorTotal = null;

    valorTotal = Math.trunc(preco * 2);

    retornoMedicamento.innerText = `Promoção de ${medicamento}`;
    retornoValorTotal.innerText = `Leve 2 por apenas R$: ${valorTotal.toFixed(2)}`;

    e.preventDefault();
});