const tarefas = [];

tarefas.push(prompt(`Digite a ${tarefas.length + 1}ª tarefa`));
tarefas.push(prompt(`Digite a ${tarefas.length + 1}ª tarefa`));
tarefas.push(prompt(`Digite a ${tarefas.length + 1}ª tarefa`));

const lista = document.querySelector("ul");
lista.innerHTML = lista.innerHTML + `<li>${tarefas[0]}</li>`;
lista.innerHTML = lista.innerHTML + `<li>${tarefas[1]}</li>`;
lista.innerHTML = lista.innerHTML + `<li>${tarefas[2]}</li>`;