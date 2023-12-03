/*
    Uma farmácia necessita de um programa que leia o total de uma compra.
    Exiba como resposta o nº máximo de vezes que o cliete pode parcelar essa compra e o valor de cada parcela
    Considere as seguintes condições:
    a) cada parcela deve ser de no mínimo R$ 20,00;
    b) o número máximo de parcelas permitido é 6;

    Ex: Valor da Compra R$: 90.00
    Pode pagar em 4x de R$: 22:50
*/

// PRIMEIRA VERSÃO SEM CONSULTA
        // const prompt = require("prompt-sync")();
        // const totalCompra = Number(prompt("Qual o valor total da compra? "));
        // let valorParcela = null;

        // valorParcela = totalCompra / 6;
        // if(valorParcela >= 20){
        //     console.log(`Pode pagar em 6x de R$: ${valorParcela.toFixed(2)}`);
        //     return;
        // }

        // valorParcela = totalCompra / 5;
        // if(valorParcela >= 20){
        //     console.log(`Pode pagar em 5x de R$: ${valorParcela.toFixed(2)}`);
        //     return;
        // }

        // valorParcela = totalCompra / 4;
        // if(valorParcela >= 20){
        //     console.log(`Pode pagar em 4x de R$: ${valorParcela.toFixed(2)}`);
        //     return;
        // }

        // valorParcela = totalCompra / 3;
        // if(valorParcela >= 20){
        //     console.log(`Pode pagar em 3x de R$: ${valorParcela.toFixed(2)}`);
        //     return;
        // }

        // valorParcela = totalCompra / 2;
        // if(valorParcela >= 20){
        //     console.log(`Pode pagar em 2x de R$: ${valorParcela.toFixed(2)}`);
        //     return;
        // }

        // valorParcela = totalCompra / 1;
        // console.log(`Pode pagar em 1x de R$: ${valorParcela.toFixed(2)}`);
        // return;

// SEGUNDA VERSÃO COM CONSULTA
        const prompt = require("prompt-sync")();
        const totalCompra = Number(prompt("Qual o valor total da compra? "));
        let auxiliar = Math.floor(totalCompra / 20); //
        let numeroParcelas = null;
        let valorParcela = null;

        if(auxiliar == 0){
            numeroParcelas = 1;
        } else if(auxiliar >= 6){
            numeroParcelas = 6;
        } else {
            numeroParcelas = auxiliar;
        }

        valorParcela = totalCompra / numeroParcelas;
        console.log(`Pode pagar em ${numeroParcelas}x de R$: ${valorParcela.toFixed(2)}`);