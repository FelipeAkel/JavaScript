const form = document.querySelector("form");
const retornoPesoIdeal = document.getElementById("retornoPesoIdeal");

form.addEventListener("submit", (e) => {

    let nome = form.inNome.value;
    let sexo = form.inSexo.value;
    let altura = Number(form.inAltura.value);
    let pesoIdeal = null;

    if(sexo === 'M'){
        pesoIdeal = 22 * altura**2;
        // pesoIdeal = 22 * Math.pow(altura, 2);
    } else if(sexo === 'F'){
        pesoIdeal = 21 * altura**2;
        // pesoIdeal = 21 * Math.pow(altura, 2);
    } else{
        alert("Erro! Campo de sexo foi alterado. Diferente de 'M - Masculino' ou 'F - Feminino' ");
        exit();
    }

    retornoPesoIdeal.innerText = `${nome}: Seu peso ideal é ${pesoIdeal.toFixed(3)} kg`;

    e.preventDefault();
});

form.addEventListener("reset", () =>{
    retornoPesoIdeal.innerText = "";
});