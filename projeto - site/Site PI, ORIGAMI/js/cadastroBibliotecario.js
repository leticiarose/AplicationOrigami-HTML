let emailInput = document.getElementById('email_cad');
let passInput = document.getElementById('senha_cad');
let nameInput = document.getElementById("nome_cad");
let nameEscolaInput = document.getElementById("nome_escola");
let sendButton = document.getElementById("sendButton");

//Create new user
sendButton.addEventListener('click', function () {
	firebase
		.auth()
		.createUserWithEmailAndPassword(emailInput.value, passInput.value)
		.then(function () {
			//Add data to Database
			addDatabase(nameInput.value, nameEscolaInput.value, emailInput.value);
			alert('Cadastrado com sucesso');
			window.location.href = "loginabibliotecario.html";

		})
		.catch(function (error) {
			console.error(error.code);
			console.error(error.message);
			alert('Falha ao cadastrar, verifique o erro no console.')
		});
});

function addDatabase(nome, nomeEscola, email) {
	let dados = {
		email: email,
		nomeEscola: nomeEscola,
		nome: nome,
		tipo: 'bibliotecario'
	}
	return firebase.database().ref('user').child('bibliotecarios').push(dados);
}

