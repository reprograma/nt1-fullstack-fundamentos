var adcionarJuros = document.querySelector("#adicionar-juros");
adcionarJuros.addEventListener("click", function(event) {
    event.preventDefault();

    var form = document.querySelector("#form-adiciona");
    var juros = obtemDadosDoForm(form);

    var jurosTr = document.createElement("tr");

    if (!validaJuros(juros)) {
        var erro = document.querySelector("#mensagem-erro");
        return erro.innerHTML = "O valor está incorreto.";
    }

    var dinheiroTd = document.createElement("td");
    var taxaTd = document.createElement("td");
    var tempoTd = document.createElement("td");
    var resultadoTd = document.createElement("td");
    
    dinheiroTd.textContent = juros.dinheiro;
    taxaTd.textContent = juros.taxa;
    tempoTd.textContent = juros.tempo;
    resultadoTd.textContent = juros.resultado;
    
    jurosTr.appendChild(dinheiroTd);
    jurosTr.appendChild(taxaTd);
    jurosTr.appendChild(tempoTd);
    jurosTr.appendChild(resultadoTd);
   
    var tabela = document.querySelector("#tabela-juros");

    tabela.appendChild(jurosTr);
   
    form.reset();

});

function obtemDadosDoForm(form) {

    var jurosRetorno = {
        dinheiro: form.dinheiro.value,
        taxa: form.taxa.value,
        tempo: form.tempo.value,
        resultado: calculaResultado(form.dinheiro.value, form.taxa.value, form.tempo.value)
    }
    console.log(jurosRetorno);
    return jurosRetorno;
}

function validaJuros(juros) {
    if (juros.dinheiro > 0) {
        return true;
    }
}

var limparForm = document.querySelector("#limpar-form");
limparForm.addEventListener('mouseover', function(event) {
    event.preventDefault();
    var form = document.querySelector("#form-adiciona");
    form.reset();
});