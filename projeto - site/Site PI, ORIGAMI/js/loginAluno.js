let emailInput = document.getElementById('email_login');
let passInput = document.getElementById('senha_login');
let sendButton = document.getElementById('sendButton');

sendButton.addEventListener('click', function() {
    firebase
        .auth()
        .signInWithEmailAndPassword(emailInput.value, passInput.value)
        .then(function (result) {
            console.log(result);
            alert('Autenticado ' + emailInput.value);
            window.location.href = "inicio.html";
        })
        .catch(function (error) {
            console.error(error.code);
            console.error(error.message);
            alert('Falha ao autenticar, verifique o erro no console')
        });
});
