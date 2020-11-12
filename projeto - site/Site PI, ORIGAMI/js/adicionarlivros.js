// let nameInput = document.getElementById("nome_cad");
// let autorInput = document.getElementById("nome_autor");
// let generoInput = document.getElementById("genero");
// let passInput = document.getElementById("senha_cad");
// let sendButton = document.getElementById("sendButton");

// sendButton.addEventListener('click', function() {
//   create(nameInput.value, autorInput.value, generoInput.value, passInput.value);
  
//   setInterval(function () {
//       window.location.href='../index.html';
//     }
//   , 700);
// })

// function create(name, autor, genero, senha,) {
//   let data = {
//     name: name,
//     autor: autor,
// 		genero: genero.toLowerCase(),
// 		senha: senha
//   };

//   return firebase.database().ref().child('books').child(generoInput.value.toLowerCase()).push(data);
// }

// //Pegar informações, bota onde tu for querer

// function search() {
// firebase.database().ref().child('books').on('value', function (snapshot) {
// 	snapshot.forEach(function (item) {
// 		firebase.database().ref('books').child(item.key).on('value', (snapshot) => {
// 			snapshot.forEach((item) => {
// 				let livros = {
// 					titulo: item.val().name,
// 					autor: item.val().autor,
// 					genero: item.val().genero,
// 				}
// 				// Aqui eu peguei todas as informações dos livros do Database, ai agr aqui embaixo tu coloca oq quiser pra fazer com esse array. (teste usando esse console pra ver oq acontece);
// 				console.log(livros);
// 			})
// 		})
// 		})
// 	}) 
// }

// setInterval(search(), 3000);

let nameInput = document.getElementById("nome_cad");
let autorInput = document.getElementById("nome_autor");
let generoInput = document.getElementById("genero");
let passInput = document.getElementById("senha_cad");
let sendButton = document.getElementById("sendButton");

sendButton.addEventListener('click', function() {
  create(nameInput.value, autorInput.value, generoInput.value, passInput.value);
  
  // let time = 0.2;
  // setInterval(function(){
  //   if(time >= 0){
  //     document.getElementById('countdown').innerHTML = time--;
  //   } else {
  //     window.location.href='index.html';
  //   }
  // }, 700);
});

function create(name, autor, genero, senha,) {
  let data = {
    name: name,
    autor: autor,
		genero: genero,
		senha: senha
  };

  return firebase.database().ref('books').child('').push(data);
}

