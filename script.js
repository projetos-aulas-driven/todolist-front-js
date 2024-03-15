const tarefas = [];

const qtde = Number(prompt("Quantas tarefas você quer adicionar?"));

let contador = 0;
while(qtde > contador) {
    tarefas.push(prompt(`Digite a ${tarefas.length + 1}ª tarefa:`));
    contador++;
}

contador = 0;
const lista = document.querySelector("ul");
while(qtde > contador) {
    lista.innerHTML += `<li>${tarefas[contador]}</li>`;
    contador++;
}