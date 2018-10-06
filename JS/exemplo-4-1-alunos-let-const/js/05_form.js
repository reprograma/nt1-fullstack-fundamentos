var adicionarAluno = document.querySelector("#adicionar-aluno");
adicionarAluno.addEventListener("click", function(event) {
    event.preventDefault();

    var form = document.querySelector("#form-adiciona");
    var aluno = obtemDadosDoForm(form);

    var alunoTr = document.createElement("tr");

    if (!validaNota(aluno)) {
        var erro = document.querySelector("#mensagem-erro");
        return erro.innerHTML = "A Nota 1 está incorreta.";
    }

    var nomeTd = document.createElement("td");
    var notaUmTd = document.createElement("td");
    var notaDoisTd = document.createElement("td");
    var mediaTd = document.createElement("td");
    
    nomeTd.textContent = aluno.nome;
    notaUmTd.textContent = aluno.notaum;
    notaDoisTd.textContent = aluno.notadois;
    mediaTd.textContent = aluno.media;
    
    alunoTr.appendChild(nomeTd);
    alunoTr.appendChild(notaUmTd);
    alunoTr.appendChild(notaDoisTd);
    alunoTr.appendChild(mediaTd);
   
    var tabela = document.querySelector("#tabela-alunos");

    tabela.appendChild(alunoTr);
   
    form.reset();

});

function obtemDadosDoForm(form) {

    var alunoRetorno = {
        nome: form.nome.value,
        notaum: form.notaum.value,
        notadois: form.notadois.value,
        media: calculaMedia(form.notaum.value, form.notadois.value)
    }
    console.log(alunoRetorno);
    console.log(JSON.stringify(alunoRetorno));
    return alunoRetorno;
}

function validaNota(aluno) {
    if (aluno.notaum > 0 && aluno.notaum <= 10) {
        return true;
    }
}