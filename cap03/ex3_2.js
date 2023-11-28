const prompt = require("prompt-sync")();

const veiculo = prompt("Veículo: ");
const preco = Number(prompt("Preço R$: "));
let entrada = null;
let parcelas = null;

entrada = preco / 2;
parcelas = entrada / 12;

console.log(`Promoção: ${veiculo}`);
console.log(`Entrada de R$ ${entrada.toFixed(2)} \n +12x de R$ ${parcelas.toFixed(2)}`);