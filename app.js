//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let listaNomes = [];
console.log(listaNomes);

//Função para exibir textos nas TAGs
function exibirNomes(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

//Função para incluir nomes na lista de amigos
function adicionarAmigo() {
    let addnome = document.querySelector('input').value;

    if (addnome == '') {
        alert('ERROR: Por favor inserir nome!');
    } else {
            listaNomes.push(addnome);
            exibirNomes('ul', listaNomes)
            limpaCampo();
        }
}

//Função para sortear um nome da lista de nomes de amigos
function sortearAmigo() {
    let nomeEscolhido = parseInt(Math.random() * listaNomes.length);
    console.log(nomeEscolhido);
    exibirNomes('ul', 'Seu amigo sorteado é: ' + listaNomes[nomeEscolhido]);
    console.log(listaNomes);
}

//Função para limpar campo INPUT
function limpaCampo() {
    document.querySelector('input').value = '';
}