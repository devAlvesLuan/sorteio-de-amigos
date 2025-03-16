//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos = [];
let listaDePessoasSorteadas = []

function adicionarAmigo() {
    let amigo = document.querySelector('input').value;

    if (amigo == '') {
        alert('Por favor, adicione um nome');
    }
    else {
        amigos.push(amigo);
    }
    
    
    listagemAmigos(amigos);
    
    apagarCampo();

}

function apagarCampo() {
    document.querySelector('input').value = '';

}

function listagemAmigos(amigos) {
    let lista = document.querySelector('ul');

    lista.innerHTML = '';

    for (i = 0; i < amigos.length; i++) {
        lista.innerHTML += `${amigos[i]}<br>`;
    }

}

function sortearAmigo(amigos) {

    let numMaximo = amigos.length;
    let numeroIndice = Math.random() * numMaximo;
    let numeroIndiceEscolhido = Math.floor(numeroIndice);
    let amigoEscolhido = amigos[numeroIndiceEscolhido];
    let sorteio = document.querySelector("#resultado");


    

    if (amigos.length == 0) {
        alert('Sem nenhum amigo adicionado');

    }

    console.log(numeroIndice)
    console.log(numeroIndiceEscolhido)



    sorteio.innerHTML = amigoEscolhido        
    

}





