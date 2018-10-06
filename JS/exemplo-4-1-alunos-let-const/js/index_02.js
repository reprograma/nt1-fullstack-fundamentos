// var tituloDaPagina = document.querySelector("h2");
// // console.log(tituloDaPagina);
// // console.log(tituloDaPagina.textContent);

// // tituloDaPagina.textContent = "Novo título";

// var aluno = document.querySelector("#primeiro-da-lista");
// // var aluno = document.getElementById("primeiro-da-lista");
// var tdPrimeiraNota = aluno.querySelector(".info-notaum");
// var primeiraNota = tdPrimeiraNota.textContent;
// var tdSegundaNota = aluno.querySelector(".info-notadois");
// var segundaNota = tdSegundaNota.textContent;

// var mediaFinal = aluno.querySelector(".info-media");

// console.log(primeiraNota);
// console.log(segundaNota);

// var notaEhValida = true;

// if (primeiraNota < 0 || primeiraNota > 10) {
//     notaEhValida = false;
//     mediaFinal.textContent = "Primeira Nota Inválida";
// }

// if (notaEhValida) {
//     var mediaCalculada = (parseFloat(primeiraNota) + parseFloat(segundaNota)) / 2;
//     mediaFinal.textContent = mediaCalculada;
// }

var todosOsAlunos = document.querySelectorAll(".aluno");
// console.log(todosOsAlunos);

for (var i = 0; i < todosOsAlunos.length; i++) {

    // console.log(todosOsAlunos[i]);
    var aluno = todosOsAlunos[i];
    // console.log(aluno);

    var tdPrimeiraNota = aluno.querySelector(".info-notaum");
    var primeiraNota = tdPrimeiraNota.textContent;
    var tdSegundaNota = aluno.querySelector(".info-notadois");
    var segundaNota = tdSegundaNota.textContent;
    var mediaFinal = aluno.querySelector(".info-media");

    // console.log(primeiraNota);
    // console.log(segundaNota);

    var notaEhValida = true;

    if (primeiraNota < 0 || primeiraNota > 10) {
        notaEhValida = false;
        mediaFinal.textContent = "Primeira Nota Inválida";
    }

    if (notaEhValida) {
        var mediaCalculada = (parseFloat(primeiraNota) + parseFloat(segundaNota)) / 2;
        if (mediaCalculada < 5) {
            // aluno.style.backgroundColor = "red";
            aluno.classList.add("abaixo-da-media");
        }
        mediaFinal.textContent = mediaCalculada.toFixed(2);
    }

}