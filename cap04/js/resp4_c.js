const form = document.querySelector("form");
const retornoTempo = document.getElementById("retornoTempo");
const retornoTroco = document.getElementById("retornoTroco");

form.addEventListener("submit", (e) => {

    let valor = Number(form.inValor.value);
    let troco = null;

    if(valor < 1.00){
        retornoTempo.innerText = `Valor Insuficiente`;
        retornoTroco.innerText = ``;
    } else if(valor >= 1.00 && valor < 1.75){
        troco = valor - 1.00;
        retornoTempo.innerText = `Tempo: 30 minutos`;
        retornoTroco.innerText = `Troco R$: ${troco.toFixed(2)}`;
    } else if(valor >= 1.75 && valor < 3.00){
        troco = valor - 1.75;
        retornoTempo.innerText = `Tempo: 60 minutos`;
        retornoTroco.innerText = `Troco R$: ${troco.toFixed(2)}`;
    } else {
        troco = valor - 3.00;
        retornoTempo.innerText = `Tempo: 120 minutos`;
        retornoTroco.innerText = `Troco R$: ${troco.toFixed(2)}`;
    }

    e.preventDefault();
});