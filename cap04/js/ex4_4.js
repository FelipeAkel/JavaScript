const form = document.querySelector("form");
const retornoHoraFranca = document.getElementById("retornoHoraFranca");

form.addEventListener("submit", (e) => {

    let horaBrasil = Number(form.inHoraBrasil.value);
    let horaFranca = null;
    
    horaFranca = horaBrasil + 5;
    if(horaFranca > 24){
        horaFranca = horaFranca - 24;
    }
    
    retornoHoraFranca.innerText = `Hora na França: ${horaFranca.toFixed(2)}`;

    e.preventDefault();
});