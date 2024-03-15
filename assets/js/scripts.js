let contador = 3;
const tarefasTutorial = [
    "Adicione uma tarefa no botão acima ☝️",
    "Passe o mouse na tarefa para ver o botão de excluir 🗑️",
    "Clique na tarefa para marcá-la como feita ✔️"
];

function adicionarTarefasTutorial() {
    const ul = document.querySelector('ul');

    for (let index = 0; index < tarefasTutorial.length; index++) {
        const elementoTarefa = `
            <li>
                <div class="btn-delete">
                    <ion-icon name="trash-outline"></ion-icon>
                </div>
                <span onclick="finalizarTarefa(this)">${tarefasTutorial[index]}</span>
            </li>
        `;

        ul.innerHTML += elementoTarefa;
    }
}

adicionarTarefasTutorial();

function adicionarNovaTarefa() {
    const novaTarefa = document.querySelector("input").value;
    let ul = document.querySelector("ul");
    
    ul.innerHTML += `
        <li>
            <div class="btn-delete">
                <ion-icon name="trash-outline"></ion-icon>
            </div>
            <span onclick="finalizarTarefa(this)">${novaTarefa}</span>
        </li>
    `;
    document.querySelector("input").value = "";
    contador++;
    atualizarContador();
}

function finalizarTarefa(elemento) {
    const li = elemento.parentNode;

    const estaFinalizada = li.classList.contains("finalizada");

    if (estaFinalizada === true) {
        contador++;
    } else {
        contador--;
    }

    li.classList.toggle("finalizada");
    atualizarContador();
}

function finalizarTodas() {
    const tarefas = document.querySelectorAll("li");

    let index = 0;

    while (index < tarefas.length) {
        tarefas[index].classList.add("finalizada");
        index++;
    }
    contador = 0;
    atualizarContador();
}

function atualizarContador() {
    const elementoContador = document.querySelector("h1");
    elementoContador.innerHTML = `TO-DO LIST (${contador})`;
}