/*
    A entrada para um clube de pesca custa R$ 20,00 por pessoa e cada pessoa tem direito a levar um peixe.
    Peixes extras custam 12,00. Elabore um programa que leia o número de pessoas de uma família que foram ao clube e o número de peixes obtidos na pescaria.
    Informe o valor a pagar.
    
    Ex:
    Nº pessoas: 4
    Nº peixes: 5
    Valor a pagar R$: 92,00 
*/

const prompt = require("prompt-sync")();
const quantPessoa = Number(prompt("Nº de pessoas: "));
const quantPeixes = Number(prompt("Nº de peixes: "));
let totalPagar = null;

if(quantPessoa >= quantPeixes){
    totalPagar = quantPessoa * 20;
} else {
    totalPagar = (quantPessoa * 20) + ( 12 * (quantPeixes - quantPessoa));
}

console.log(`Valor a Pagar R$: ${totalPagar.toFixed(2)}`);