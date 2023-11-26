const form = document.querySelector("form");
const retornoValorTotal = document.getElementById("retornoValorTotal");

form.addEventListener("submit", (e) => {
    let valor = Number(form.inValor.value);
    let tempo = Number(form.inTempo.value);
    let valorTotal = null;

    valorTotal = Math.ceil(tempo / 15) * valor;

    retornoValorTotal.innerText = `Valor a Pagar R$: ${valorTotal.toFixed(2)}`;
    
    e.preventDefault();
});

// Cheguei a essa lógica na primeira vez! Depois verifiquei o exemplo e descobrir uma forma de fazer em uma linha
// valorTotal = tempo / 15;
// if(tempo % 15 == 0){
//     valorTotal = valor * valorTotal; 
// } else {
//     valorTotal = Math.trunc(valorTotal + 1);
//     valorTotal = valor * valorTotal; 
// }