//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let listaNomes = [];

//Função para exibir textos nas TAGs
function exibirNomes(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

//Função para incluir nomes na lista de amigos
function adicionarAmigo() {
    let addNome = document.querySelector('input').value;

    if (addNome === '') {
        alert('ERROR: Por favor inserir nome!');
    } else {
        listaNomes.push(addNome);

        for (let i = 0 ; i < listaNomes.length ; i++) {  
            let li = document.createElement('li');
            li.textContent = listaNomes[i];
            console.log(li);
            exibirNomes('ul', listaNomes)
        }
        limpaCampo(); 
    }
}

//Função para sortear um nome da lista de nomes de amigos
function sortearAmigo() {
    let nomeEscolhido = parseInt(Math.random() * listaNomes.length);
    console.log(nomeEscolhido);
    exibirNomes('ul', `Seu amigo sorteado é: ${listaNomes[nomeEscolhido]}`);
    console.log(listaNomes);
}

//Função para limpar campo INPUT
function limpaCampo() {
    addnome = document.querySelector('input');
    addnome.value = '';
}