const form = document.querySelector("form");
const retornoValorPagar = document.getElementById("retornoValorPagar");

form.addEventListener("submit", (e)=> {
    let quilo = Number(form.inQuilo.value);
    let gramas = Number(form.inGramas.value);
    let valorPagar = null;

    valorPagar = (quilo * gramas) / 1000;

    retornoValorPagar.innerText = `Valor a pagar R$: ${valorPagar.toFixed(2)}`;

    e.preventDefault();
});