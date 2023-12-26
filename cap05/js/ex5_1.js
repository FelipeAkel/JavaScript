const form = document.querySelector("form");
const retornoTabuada = document.querySelector("pre");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    let numero = Number(form.inNumero.value);
    let resposta = '';

    for(let x = 1; x <= 10; x++){
        resposta = resposta + numero + " x " + x + " = " + (numero * x) + "\n";
    }

    retornoTabuada.innerText = resposta;
});