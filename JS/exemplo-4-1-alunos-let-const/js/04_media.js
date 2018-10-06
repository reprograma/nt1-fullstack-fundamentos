var todosOsAlunos = document.querySelectorAll(".aluno");

for (var i = 0; i < todosOsAlunos.length; i++) {
    var aluno = todosOsAlunos[i];

    var tdPrimeiraNota = aluno.querySelector(".info-notaum");
    var primeiraNota = tdPrimeiraNota.textContent;
    var tdSegundaNota = aluno.querySelector(".info-notadois");
    var segundaNota = tdSegundaNota.textContent;
    var mediaFinal = aluno.querySelector(".info-media");

    var notaEhValida = true;

    if (primeiraNota < 0 || primeiraNota > 10) {
        notaEhValida = false;
        mediaFinal.textContent = "Primeira Nota Inválida";
    }

    if (notaEhValida) {
        // var mediaCalculada = (parseFloat(primeiraNota) + parseFloat(segundaNota)) / 2;
        var mediaCalculada = calculaMedia(primeiraNota, segundaNota);
        if (mediaCalculada < 5) {
            aluno.classList.add("abaixo-da-media");
        }
        mediaFinal.textContent = mediaCalculada.toFixed(2);
    }

}

function calculaMedia(provaUm, provaDois) {
    var mediaDentroDaFuncao = 0;
    mediaDentroDaFuncao = (parseFloat(provaUm) + parseFloat(provaDois)) / 2;
    return mediaDentroDaFuncao;
}