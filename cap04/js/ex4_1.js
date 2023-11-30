// Cria referência ao form e elementos de resposta do programa
const form = document.querySelector("form");
const retornoMedia = document.getElementById("retornoMedia");
const retornoMensagem = document.getElementById("retornoMensagem");
const retornoRecuperacao = document.getElementById("retornoRecuperacao");

// cria um "ouvinte" de evento, acionado quando o botão submit for clicado
form.addEventListener("submit", (e)=> {

    //obtém valores do form
    let aluno = form.inAluno.value;
    let nota1 = Number(form.inNota1.value);
    let nota2 = Number(form.inNota2.value);
    let notaRecuperacao = Number(form.inNotaRecupercao.value);
    let media = null;

    media = (nota1 + nota2) / 2;

    if(notaRecuperacao != ''){
        if(notaRecuperacao >= 7.0){
            retornoMensagem.innerText = `Parabéns ${aluno}! Você foi aprovado(a) na Prova de Recuperacao`;
            retornoMensagem.style.color = 'blue';
        }else {
            retornoMensagem.innerText = `Ops ${aluno}! Você foi reprovado(a) na Prova de Recuperacao`;
            retornoMensagem.style.color = 'red';
        }
    } else {
        if(media >= 7.0){
            retornoMensagem.innerText = `Parabéns ${aluno}! Você foi aprovado(a)`;
            retornoMensagem.style.color = 'blue';
        } else if(media >= 4.0){
            retornoMensagem.innerText = `Atenção ${aluno}! Qual sua nota da prova de recuperação?`;
            retornoMensagem.style.color = 'orange';
            retornoRecuperacao.style.display = 'block';
        } else {
            retornoMensagem.innerText = `Ops ${aluno}! Você foi reprovado(a)`;
            retornoMensagem.style.color = 'red';
        }
    }

    retornoMedia.innerText = `Média das Notas: ${media.toFixed(2)}`;
   
    // evita envio do form
    e.preventDefault();
});