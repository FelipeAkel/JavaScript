const form = document.querySelector("form");
const retornoRaizQuadrada = document.getElementById("retornoRaizQuadrada");

form.addEventListener("submit", (e) => {

    let numero = form.inNumero.value;
    let raizQuadrada = null;
    
    raizQuadrada = Math.sqrt(numero);

    if(Number.isInteger(raizQuadrada) ){
        retornoRaizQuadrada.innerText = `Raiz Quadrada de ${numero} é: ${raizQuadrada}`;
        retornoRaizQuadrada.style.color = 'blue';
    } else {
        retornoRaizQuadrada.innerText = `Não há Raiz Quadrada de ${numero}`;
        retornoRaizQuadrada.style.color = 'red';
    }

    e.preventDefault();
});

    // let verificador = null;
    // verificador = raizQuadrada**2;
    // if(raizQuadrada === verificador ){