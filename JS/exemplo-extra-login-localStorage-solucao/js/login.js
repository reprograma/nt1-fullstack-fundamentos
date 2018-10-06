function salvarDadosNoLocalStorage() {
    localStorage.setItem('usuario', 'helena');
    localStorage.setItem('senha', 'helena');
}

window.onload = salvarDadosNoLocalStorage;

var botaoLogin = document.querySelector("#login");

botaoLogin.addEventListener('click', function(event) {
    event.preventDefault();
    
    var usuarioLS = localStorage.getItem('usuario');
    var senhaLS = localStorage.getItem('senha');

    var user = document.getElementById('username');
    var pwd = document.getElementById('password');

    console.log(user.value);
    console.log(pwd.value);
    console.log(usuarioLS);
    console.log(senhaLS);

    if ((user.value == usuarioLS) && (pwd.value == senhaLS)) {
        console.log("sucesso!");
    } else {
        console.log("ih, deu ruim.");
    }
});

// var botaoLogin = document.querySelector("#login");
// botaoLogin.addEventListener('click', function(event) {
    
//     event.preventDefault();

//     var usuarioDigitado = document.getElementById('username').value;
//     var senhaDigitada = document.getElementById('password').value;

//     if (usuarioDigitado == 'admin' && senhaDigitada == 'admin') {
//         // alert('ok');
//         console.log('ok');
//         document.querySelector("#mensagem").textContent = 'Credenciais Válidas';
//     } else {
//         console.log('not ok');
//         document.querySelector("#mensagem").textContent = 'Usuário ou Senha Inválidos';
//         // alert('usuário ou senha incorretos');
//     }

// });