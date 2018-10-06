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
        var mediaCalculada = (parseFloat(primeiraNota) + parseFloat(segundaNota)) / 2;
        if (mediaCalculada < 5) {
            aluno.classList.add("abaixo-da-media");
        }
        mediaFinal.textContent = mediaCalculada.toFixed(2);
    }

}

var adicionarAluno = document.querySelector("#adicionar-aluno");
adicionarAluno.addEventListener("click", function(event) {
    event.preventDefault();
    console.log("btn adicionar");

    var form = document.querySelector("#form-adiciona");

    var nome = form.nome.value;
    var nota1 = form.notaum.value;
    var nota2 = form.notadois.value;
    
    var alunoTr = document.createElement("tr");
    
    var nomeTd = document.createElement("td");
    var notaUmTd = document.createElement("td");
    var notaDoisTd = document.createElement("td");
    var mediaTd = document.createElement("td");
    
    nomeTd.textContent = nome;
    notaUmTd.textContent = nota1;
    notaDoisTd.textContent = nota2;
    
    alunoTr.appendChild(nomeTd);
    alunoTr.appendChild(notaUmTd);
    alunoTr.appendChild(notaDoisTd);
    
    var tabela = document.querySelector("#tabela-alunos");

    tabela.appendChild(alunoTr);

});