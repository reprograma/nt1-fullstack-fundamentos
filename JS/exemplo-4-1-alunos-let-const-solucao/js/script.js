// buscar o primeiro aluno
const aluno = document.querySelector("#primeiro-da-lista");
console.log(aluno);

// buscar o valor da primeira nota
const tdPrimeiraNota = aluno.querySelector(".info-notaum");
let primeiraNota = tdPrimeiraNota.textContent;

// buscar o valor da segunda nota
const tdSegundaNota = aluno.querySelector(".info-notadois");
let segundaNota = tdSegundaNota.textContent;
console.log(primeiraNota);
console.log(segundaNota);

// campo da média
const mediaFinal = aluno.querySelector(".info-media");

let notaEhValida = true;

if (primeiraNota < 0 || primeiraNota > 10) {
    notaEhValida = false;
    mediaFinal.textContent = "Nota Inválida.";
}
if (notaEhValida) {
    // calculando a média e apresentando o resultado
    let mediaCalculada = (parseFloat(primeiraNota) + parseFloat(segundaNota)) / 2;
    mediaFinal.textContent = mediaCalculada;
}