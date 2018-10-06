const adicionarAluno = document.querySelector("#adicionar-aluno");

adicionarAluno.addEventListener('click', function(event) {
    event.preventDefault();

    const formularioAluno = document.querySelector("#form-adiciona");

    // selecionando os dados do formulário
    let nomeAluno = formularioAluno.nome.value;
    let notaUmAluno = formularioAluno.notaum.value;
    let notaDoisAluno = formularioAluno.notadois.value;

    // criando a linha
    let alunoTr = document.createElement("tr");

    let nomeAlunoTd = document.createElement("td");
    let notaUmAlunoTd = document.createElement("td");
    let notaDoisAlunoTd = document.createElement("td");
    let mediaAlunoTd = document.createElement("td");

    nomeAlunoTd.textContent = nomeAluno;
    notaUmAlunoTd.textContent = notaUmAluno;
    notaDoisAlunoTd.textContent = notaDoisAluno;
    mediaAlunoTd.textContent = calculaMedia(notaUmAluno, notaDoisAluno);
    
    alunoTr.appendChild(nomeAlunoTd);
    alunoTr.appendChild(notaUmAlunoTd);
    alunoTr.appendChild(notaDoisAlunoTd);
    alunoTr.appendChild(mediaAlunoTd);

    const tabela = document.querySelector("#tabela-alunos");
    tabela.appendChild(alunoTr);

});