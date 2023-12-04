// Elaborar um programa que leia três lados e verifique se eles podem ou não formar um triângulo.
// Para formar um triângulo, um dos lados não pode ser maior que a soma dos outros dois. ????
// Caso possam formar um triângulo, exiba também que o tipo do triângulo:
// Equilátero (3 lados iguais);
// Isósceles (2 lados iguais);
// Escaleno (3 lados diferentes);

const form = document.querySelector("form");
const retornoTriangulo = document.getElementById("retornoTriangulo");
const retornoTipoTriangulo = document.getElementById("retornoTipoTriangulo");

form.addEventListener("submit", (e) => {
    
    e.preventDefault();

    const ladoA = Number(form.inLadoA.value);
    const ladoB = Number(form.inLadoB.value);
    const ladoC = Number(form.inLadoC.value);

    if(ladoA > (ladoB + ladoC) || ladoB > (ladoA + ladoC) || ladoC > (ladoA + ladoB)){
        retornoTriangulo.innerText = `Lados não podem formar um triângulo.`;
        retornoTipoTriangulo.innerText = ``;
    } else {
        retornoTriangulo.innerText = `Lados podem formar um triângulo.`;
        // Tipos Triângulo
        if(ladoA == ladoB && ladoA == ladoC){
            retornoTipoTriangulo.innerText = `Tipo: Equilátero (3 lados iguais)`;
        } else if(ladoA == ladoB || ladoA == ladoC || ladoC == ladoB){
            retornoTipoTriangulo.innerText = `Tipo: Isósceles (2 lados iguais)`;
        } else {
            retornoTipoTriangulo.innerText = `Tipo: Escaleno (3 lados diferentes)`;
        }
    }

});


// Equilátero (3 lados iguais);
// Isósceles (2 lados iguais);
// Escaleno (3 lados diferentes);