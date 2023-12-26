const form = document.querySelector("form");
const retornoDescrescente = document.getElementById("retornoDescrescente");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    let numero = Number(form.inNumero.value);
    let imprimir = `Entre ${numero} e 1:\n`;

    for(let x = numero; x >= 2; x--){
        imprimir = `${imprimir} ${x},`;
        //x == 1 ? imprimir = `${imprimir}.` : imprimir = `${imprimir},`; // Aumentar a eficiência da execução tiramos essa condição do loop
    }

    imprimir = `${imprimir} 1.`;

    retornoDescrescente.innerText = `${imprimir}`;
});