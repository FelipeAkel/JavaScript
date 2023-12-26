const form = document.querySelector("form");
const retornoSituacao = document.getElementById("retornoSituacao");

form.addEventListener("submit", (e) => {

    let velPermitida = Number(form.inVelPermitida.value);
    let velCondutor = Number(form.inVelCondutor.value);
    let velAte20 = velPermitida * 1.20;

    if(velCondutor <= velPermitida){
        retornoSituacao.innerText = `Sem Multa`;
    } else if(velCondutor <= velAte20){
        retornoSituacao.innerText = `Multa Leve`;
    } else {
        retornoSituacao.innerText = `Multa Grave`;
    }

    e.preventDefault();
});