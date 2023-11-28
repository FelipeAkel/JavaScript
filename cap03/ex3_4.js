/* Elaborar um programa para uma veterinária, que leia o peso de uma ração em kg e o quato um gato cosome por dia da ração, em gramas.
Informe  quantos dias irá durar a ração e o quanto sobra da ração em gramas.*/

const prompt = require("prompt-sync")();
let peso = Number(prompt("Peso da Ração (kg): "));
let consumoDiario = Number(prompt("Consumo Diário (gr): "));
let duracaoDias = null;
let sobra = null;

duracaoDias = Math.floor((peso * 1000) / consumoDiario); 
sobra = (peso * 1000) % consumoDiario; 

// console.log(`Peso da Ração (kg): ${peso}`);
// console.log(`Consumo Diário (gr): ${consumoDiario}`);
console.log(`Duração dias: ${duracaoDias}`);
console.log(`Sobra (gr): ${sobra}`);