/**MODULO 1 EXERCICIO 1
 * 
var endereco = {
	rua: "Rua dos pinheiros",
	numero: 1293,
	bairro: "Centro",
	cidade: "São Paulo",
	uf: "SP"
   };
function Exibe(endereco){
	return console.log(
		"O Usuário mora em "
		+endereco.cidade+" / "
		+endereco.uf+", no bairro "
		+endereco.bairro+", na rua "+"''"
		+endereco.rua+"''"+" com nº "
		+endereco.numero
	)
}
Exibe(endereco);*/

/**MODULO 1 EXERCICIO 2
 * 
function pares(x,y){
	for(var i = x; i <= y; i++){
		if(i % 2 == 0) console.log(i);	
	}
}
pares(32,321);*/

/**MODULO 1 EXERCICIO 3 
function temHabilidade(skills) {
	/** nao era assim mas funcionou
	 for(skill of skills){
		return (skill == 'Javascript') ? true : false;
	}*//*
	return skills.indexOf("Javascript") != -1 ? true : false;
   }
   var skills = ["Javascript", "ReactJS", "React Native"];
   console.log(temHabilidade(skills));*/
   
/**MODULO 1 EXERCICIO 4 
function experiencia(anos) {
	if(anos >= 0 && anos <= 1)
		console.log("INICIANTE");
	if(anos > 1 && anos <= 3)
		console.log("INTERMEDIÁRIO");
	if(anos > 3 && anos <= 6)
		console.log("AVANÇADO");
	if(anos > 6)
		console.log("JEDI MASTER")
   }
   var anosEstudo = 6.6;
   experiencia(anosEstudo);
   // De 0-1 ano: Iniciante
   // De 1-3 anos: Intermediário
   // De 3-6 anos: Avançado
   // De 7 acima: Jedi Master*/
   
/**MODULO 1 EXERCICIO 5 
var usuarios = [
	{
	nome: "Diego",
	habilidades: ["Javascript", "ReactJS", "Redux"]
	},
	{
	nome: "Gabriel",
	habilidades: ["VueJS", "Ruby on Rails", "Elixir"]
	}
   ];
   for(usuario of usuarios){
	console.log(
		"O "
			+usuario.nome+
		" possui as habilidades: "
			+usuario.habilidades.join(", ")
	)
   }*/

/**MODULO 2 EXERCICIO 1 

var btnElement = document.querySelector("#app button");
var tela = document.querySelector("#app");
btnElement.onclick = function criaEleTela(){
	var ele = document.createElement('div');
	ele.style.width = '100px';
	ele.style.height = '100px';
	ele.style.backgroundColor = '#FF0000';
	tela.appendChild(ele);
}*/

/**MODULO 2 EXERCICIO 2 
var btnElement = document.querySelector("#app button");
var tela = document.querySelector("#app");
btnElement.onclick = function criaEleTela(){
	var ele = document.createElement('div');
	ele.style.width = '100px';
	ele.style.height = '100px';
	ele.style.backgroundColor = '#FF0000';
	tela.appendChild(ele);
	ele.onmouseover = function mudarCor(){
		var newColor = getRandomColor();
		ele.style.backgroundColor = newColor;
	}
}
function getRandomColor() {
	var letters = "0123456789ABCDEF";
	var color = "#";
	for (var i = 0; i < 6; i++) {
	color += letters[Math.floor(Math.random() * 16)];
	}
	return color;
   }
   */
/**MODULO 2 EXERCICIO 3 
var nomes = ["Diego", "Gabriel", "Lucas"];
var listElement = document.querySelector('#app ul');
for(nome of nomes){
	var li = document.createElement('li');
	var liText = document.createTextNode(nome);
	li.appendChild(liText);
	listElement.appendChild(li);
}*/
/**MODULO 2 EXERCICIO 4 
var nomes = ["Diego", "Gabriel", "Lucas"];
var listElement = document.querySelector('#app ul');
var inputElement = document.querySelector('#app input');

function renderList(){
	listElement.innerHTML = '';
	
	for(nome of nomes){
		var li = document.createElement('li');
		var liText = document.createTextNode(nome);
		li.appendChild(liText);
		listElement.appendChild(li);
	}
}
renderList();

function adicionar(){
	var addText = inputElement.value;
	nomes.push(addText);
	inputElement.value = '';
	renderList();
}*/
/**MODULO 3 EXERCICIO APP TODO LIST */



/*MODOLO 4 EXERCICIO 1
function checaIdade(idade) {
	return new Promise(function(resolve, reject){
		setTimeout(function() {
			if(idade >= 18){
				resolve();
			}else{
				reject();
			}
		}, 2000);
	});
}

checaIdade(21)
	.then(function(){
		console.log("Maior ou igual 18");
	})
	.catch(function(){
		console.log("Menor 18");
	});	*/
	
/*MODOLO 4 EXERCICIO 2*/
var listElement = document.querySelector('ul');
var inputElement = document.querySelector('input');

function renderRepositories(repositories) {
	for (repo of repositories) {
    	const textElement = document.createTextNode(repo.full_name);
        const liElement = document.createElement('li');

        liElement.appendChild(textElement);
        listElement.appendChild(liElement);
      }
}

function listRepositories() {
	listElement.innerHTML = '';
    var user = inputElement.value;

    if (!user) return;

    axios.get('https://api.github.com/users/' + user + '/repos')
    .then(function (response) {
    	renderRepositories(response.data);
    })
}