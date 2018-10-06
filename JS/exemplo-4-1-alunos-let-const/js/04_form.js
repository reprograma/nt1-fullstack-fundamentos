var adicionarAluno = document.querySelector("#adicionar-aluno");
adicionarAluno.addEventListener("click", function(event) {
    event.preventDefault();
    console.log("btn adicionar");

    var form = document.querySelector("#form-adiciona");

    // funcao para obter os dados do formulario
    var aluno = obtemDadosDoForm(form);
    console.log(aluno);

    var alunoTr = document.createElement("tr");
    var nomeTd = document.createElement("td");
    var notaUmTd = document.createElement("td");
    var notaDoisTd = document.createElement("td");
    var mediaTd = document.createElement("td");
    
    nomeTd.textContent = aluno.nome;
    notaUmTd.textContent = aluno.notaum;
    notaDoisTd.textContent = aluno.notadois;
    // mediaTd.textContent = calculaMedia(nota1, nota2);
    mediaTd.textContent = aluno.media;
    
    alunoTr.appendChild(nomeTd);
    alunoTr.appendChild(notaUmTd);
    alunoTr.appendChild(notaDoisTd);
    alunoTr.appendChild(mediaTd);
    
    var tabela = document.querySelector("#tabela-alunos");

    tabela.appendChild(alunoTr);

});

function obtemDadosDoForm(form) {

    var alunoRetorno = {
        nome: form.nome.value,
        notaum: form.notaum.value,
        notadois: form.notadois.value,
        media: calculaMedia(form.notaum.value, form.notadois.value)
    }
    console.log(alunoRetorno);
    return alunoRetorno;
}