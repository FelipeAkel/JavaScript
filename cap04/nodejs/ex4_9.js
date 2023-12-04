/*
    Elaborar um programa que leia um número - que deve ser uma centena.
    Calcule e exiba a centena invertida.
    Caso o número não seja uma centena, exiba mensagem.

    Ex: Número (centena): 298
    Invertido: 892
*/
const prompt = require("prompt-sync")();
const numero = Number(prompt('Número (centena): '));
let num1 = null;
let num2 = null;
let num3 = null;
let numResto = null;

if(numero < 100 || numero >= 1000){
    console.log(`Ops! Número ${numero} não é uma centena.`);
    return;
}

num1 = Math.floor(numero / 100);
numResto = numero - (num1 * 100);
num2 = Math.floor(numResto / 10);
numResto = numResto - (num2 * 10);
num3 = Math.floor(numResto / 1);

console.log(`Invertido: ${num3}${num2}${num1}`);