const form = document.querySelector("form");
const respTitulo = document.querySelector("h3");
const respMinuto = document.querySelector("h4");

form.addEventListener("submit", (e) => {

    const titulo = form.inTitulo.value;
    const duracao = Number(form.inDuracao.value);
    let horas = null;
    let minutos = null;
    
    // Math página 52. Tabela 2.2
    horas = Math.floor(duracao / 60);
    minutos = Math.abs((horas * 60) - duracao);

    respTitulo.innerText = `Nome filme: ${titulo}`;
    respMinuto.innerText = `${horas} hora(s) e ${minutos} minuto(s)`;

    // console.log(horas);
    // console.log(minutos);
    e.preventDefault();
});

/*
getElementById
    const respTitulo = document.getElementById("retornoTitulo");
    const respMinuto = document.getElementById("retornoDuracao");
*/