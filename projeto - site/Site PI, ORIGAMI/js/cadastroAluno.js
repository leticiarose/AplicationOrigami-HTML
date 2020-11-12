// let emailInput = document.getElementById('email_cad');
// // console.log(emailInput.value);
// let passInput = document.getElementById('senha_cad');
// let sendButton = document.getElementById('sendButton');

// //Create new user
// sendButton.addEventListener('click', function () {
//   firebase
//     .auth()
//     .createUserWithEmailAndPassword(emailInput.value, passInput.value)
//     .then(function () {
//       console.log('Cadastrado com sucesso');
//     })
//     .catch(function (error) {
//       console.error(error.code);
//       console.error(error.message);
//       alert('Falha ao cadastrar, verifique o erro no console.')
//     });

//   let time = 0.2;
//   setInterval(function () {
//     if (time >= 0) {
//       document.getElementById('countdown').innerHTML = time--;
//     } else {
//       window.location.href = 'loginaluno.html';
//     }
//   }, 700);
//   return firebase.database().ref('user').child('aluno').push(data);

// });

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
			window.location.href = "loginaluno.html";

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
		tipo: 'aluno'
	}
	return firebase.database().ref('user').child('alunos').push(dados);
}


