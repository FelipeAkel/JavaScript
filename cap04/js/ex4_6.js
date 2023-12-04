// Em um determinado momento do dia, apenas notas de 10, 50 e 100 estão disponíveis em um terminal de caixa eletrônico.
// Elaborar um programa que leia um valor de saque de um cliente, verifique sua validade (ou seja, se pode ser pago com as notas disponíveis)
// e informe o número mínimo de notas de 100, 50 e10 necessárias para pagar esse saque.

const form = document.querySelector("form");
const retornoSaqueIndisponivel = document.getElementById("retornoSaqueIndisponivel");
const retornoNota100 = document.getElementById("retornoNota100");
const retornoNota50 = document.getElementById("retornoNota50");
const retornoNota10 = document.getElementById("retornoNota10");

form.addEventListener("submit", (e) => {

    let saque = Number(form.inSaque.value);
    let multiploDe10 = saque / 10;
    let quantNota100 = 0;
    let quantNota50 = 0;
    let quantNota10 = 0;

    if(!Number.isInteger(multiploDe10) || saque == 0){
        form.inSaque.focus();
        retornoSaqueIndisponivel.innerText = `Desculpe, saque indisponível.\nO caixa somente contém notas de 10, 50 e 100.`;
        retornoSaqueIndisponivel.style.display = 'block';
        retornoNota100.style.display = 'none';
        retornoNota50.style.display = 'none';
        retornoNota10.style.display = 'none';

        e.preventDefault();
        return;
    }

    quantNota100 = Math.floor(saque / 100);
    if(Number.isInteger(quantNota100)){
        saque = saque - (quantNota100 * 100);
    }
    quantNota50 = Math.floor(saque / 50);
    if(Number.isInteger(quantNota50)){
        saque = saque - (quantNota50 * 50);
    }
    quantNota10 = Math.floor(saque / 10);
    if(Number.isInteger(quantNota10)){
        saque = saque - (quantNota10 * 10);
    }

    retornoNota100.innerText = `Notas de R$ 100: ${quantNota100}`;
    retornoNota50.innerText = `Notas de R$ 50: ${quantNota50}`;
    retornoNota10.innerText = `Notas de R$ 10: ${quantNota10}`;
    retornoSaqueIndisponivel.style.display = 'none';
    retornoNota100.style.display = 'block';
    retornoNota50.style.display = 'block';
    retornoNota10.style.display = 'block';
    
    e.preventDefault();
});