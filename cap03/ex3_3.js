/* Elaborar um programa para uma empresa que leia o nome, salário e o tempo que um funcionário trabalha na empresa. 
Sabendo que a cada 4 anos (quadriênio) o funcionário recebe um acréscimo de 1% o salário, 
calcule e informe o número de quadriênios a que o funcionário tem direito e o salário final */

const prompt = require("prompt-sync")();
const nome = prompt("Qual o seu nome? ");
const salario = Number(prompt("Qual o seu salário? "));
const tempo = Number(prompt("Qual o tempo de empresa? "));
let salarioFinal = null;
let quadrienio = null;
let acrescimo = null;

quadrienio = Math.floor(tempo / 4);

// com Juros Composto
salarioFinal = salario
if(quadrienio >= 1){
    for($x = 0; $x <= quadrienio; $x++){
        salarioFinal = salarioFinal * 1.01;
    }
}

// com Juros Simples
acrescimo = salario * quadrienio / 100;

console.log(`Nome: ${nome}`);
console.log(`Salário Inicial R$: ${salario}`);
console.log(`Tempo na Empresa: ${tempo}`);
console.log(`Quadriênios: ${quadrienio}`);
console.log(`Salário Final com Juros Composto R$: ${salarioFinal.toFixed(2)}`);
console.log(`Salário Final com Juros Simples R$: ${(salario + acrescimo).toFixed(2)}`);