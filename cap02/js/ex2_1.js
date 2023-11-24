// Cria referência ao form e ao elemento h3 (onde será exibida a resposta)
const form = document.querySelector("form");    
const resp = document.querySelector("h3");          // primeiro elemento h3 da página

// Cria um "ouvinte" de evento, acionado quando o botão submit for clicado
form.addEventListener("submit", (e) => {
    const nome = form.inNome.value;                 // obtendo o nome digitado no formulário
    resp.innerText = `Bem-Vindo(a) ${nome}`;        // exibe a resposta do programa

    e.preventDefault();                             // evita o envio do form
});

// const resp_id = document.getElementById("h3_id");   // getElementById vincula ao ID criado 
// const cor = document.querySelector("#inCor");       // elemento com id="inCon"
// const lista = document.querySelector(".lista");     // elemento da class="lista"