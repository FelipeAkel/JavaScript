const prompt = require("prompt-sync")();
const num1 = Number(prompt("Qual o valor de número 1? "));
const num2 = Number(prompt("Qual o valor de número 2? "));
let soma = 0;
if(num1 >= 0 && num2 >= 0){
    soma = num1 + num2;
    console.log("Soma é " + soma, typeof soma);
} else {
    console.log("Erro! Um dos valores informado não é numérico. Num1: " + num1 + " Num2: " + num2);
}