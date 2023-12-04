// Elaborar um programa que leia a velocidade permitida em uma estrada e a velocidade de um condutor.
// Se a velocidade for inferior ou igual à permitida, exiba "Sem Multa".
// Se a velocidade for de até 20% maior que a permitida, exiba "Multa Leve". 
// E, se a velocidade for superior a 20% da velocidade permitida. exiba "Multa Grave". 

const form = document.querySelector("form");
const retornoSituacao = document.getElementById("retornoSituacao");

form.addEventListener("submit", (e) => {

    let velPermitida = Number(form.inVelPermitida.value);
    let velCondutor = Number(form.inVelCondutor.value);
    let velAte20 = velPermitida * 1.20;

    console.log(velAte20);

    if(velCondutor <= velPermitida){
        retornoSituacao.innerText = `Sem Multa`;
    } else if(velCondutor <= velAte20){
        retornoSituacao.innerText = `Multa Leve`;
    } else {
        retornoSituacao.innerText = `Multa Grave`;
    }

    e.preventDefault();
});