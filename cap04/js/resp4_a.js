const form = document.querySelector("form");
const retornoParImpar = document.getElementById("retornoParImpar");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const numero = Number(form.inNumero.value);
    const verificador = numero / 2;

    Number.isInteger(verificador) ? retornoParImpar.innerText = `${numero} é Par` : retornoParImpar.innerText = `${numero} é Ímpar`;

    // if(Number.isInteger(verificador)){
    //     retornoParImpar.innerText = `${numero} é Par`;
    // } else {
    //     retornoParImpar.innerText = `${numero} é Ímpar`;
    // }
});