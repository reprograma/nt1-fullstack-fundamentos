var todosOsJuros = document.querySelectorAll(".juros");

for (var i = 0; i < todosOsJuros.length; i++) {
    var juros = todosOsJuros[i];

    var tdDinheiro = juros.querySelector(".info-dinheiro");
    var dinheiro = tdDinheiro.textContent;
    var tdTaxa = juros.querySelector(".info-taxa");
    var taxa = tdTaxa.textContent;
    var tdTempo = juros.querySelector(".info-tempo");
    var tempo = tdTempo.textContent;
    var resultadoFinal = juros.querySelector(".info-resultado");

    var dinheiroEhValido = true;

    if (dinheiro < 0) {
        dinheiroEhValido = false;
        resultadoFinal.textContent = "Dinheiro Inválido.";
    }

    if (dinheiroEhValido) {
        var resultadoCalculado = calculaResultado(dinheiro, taxa, tempo);
        resultadoFinal.textContent = resultadoCalculado.toFixed(2);
    }

}

function calculaResultado(dinheiro, taxa, tempo) {
    let resultadoDentroDaFuncao = 0;
    resultadoDentroDaFuncao = (parseFloat(dinheiro) * (parseFloat(taxa)/100) * parseInt(tempo));
    return resultadoDentroDaFuncao;
}