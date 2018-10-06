const input = document.getElementById("newsInputEmail");
const botao = document.querySelector(".news__button");
let inputValue = input.value;

botao.addEventListener("click", function (event) {
    event.preventDefault();

    const resposta = document.createElement("span");

    const respostaMensagem = document.createTextNode("Email cadastrado com sucesso!");

    resposta.appendChild(respostaMensagem);

    const newsForm = document.querySelector(".news__form");

    newsForm.insertBefore(resposta, input.parentNode);

    // alert(`O e-mail ${inputValue} foi cadastrado com sucesso.`);

});



// function criarSpan(event) {
//     window.event.preventDefault();

//     //create element cria novos elementos
//     const resposta = document.createElement("span");

//     //create text node cria nós de texto
//     const respostaMensagem = document.createTextNode("Email cadastrado com sucesso!");

//     //append child insere item dentro de um elemnto
//     resposta.appendChild(respostaMensagem);

//     //insert before insere item em um elemento antes de um item estabelecido
//     newsForm.insertBefore(resposta, input.parentNode);

// };


