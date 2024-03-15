let contador = 3;
const tarefas = [
    { titulo: "Adicione uma tarefa no botão acima ☝️", status: "progresso" },
    { titulo: "Passe o mouse na tarefa para ver o botão excluir 🗑️", status: "progresso" },
    { titulo: "Clique na tarefa para marcá-la como feita ✔️", status: "progresso" }
];

function atualizarTarefas() {
    const ul = document.querySelector("ul");
    ul.innerHTML = "";
    contador = 0;

    for (let index = 0; index < tarefas.length; index++) {
        let elementoTarefa;
        if (tarefas[index].status === "finalizada") {
            elementoTarefa = `
                <li class="finalizada">
                    <div class="btn-delete">
                        <ion-icon name="trash-outline"></ion-icon>
                    </div>
                    <span onclick="finalizarTarefa(this)">${tarefas[index].titulo}</span>
                </li>
            `;
        } else {
            elementoTarefa = `
                <li>
                    <div class="btn-delete">
                        <ion-icon name="trash-outline"></ion-icon>
                    </div>
                    <span onclick="finalizarTarefa(this)">${tarefas[index].titulo}</span>
                </li>
            `;
        }

        ul.innerHTML += elementoTarefa;
        contador++;
    }
    atualizarContador();
}

atualizarTarefas();

function adicionarNovaTarefa() {
    const novaTarefa = document.querySelector("input").value;
    tarefas.push({titulo: novaTarefa, status: "progresso"});
    atualizarTarefas();
    document.querySelector("input").value = "";
}

function finalizarTarefa(elemento) {
    const li = elemento.parentNode;

    const estaFinalizada = li.classList.contains("finalizada");
    const index = tarefas.findIndex((item) => item.titulo === elemento.innerHTML);

    if (estaFinalizada === true) {
        contador++;
        tarefas[index].status = "progresso";
    } else {
        contador--;
        tarefas[index].status = "finalizada";
    }

    li.classList.toggle("finalizada");
    atualizarContador();
}

function finalizarTodas() {
    const elementosTarefas = document.querySelectorAll("li");

    let index = 0;

    while (index < tarefas.length) {
        elementosTarefas[index].classList.add("finalizada");
        tarefas[index].status = "finalizada";
        index++;
        console.log(tarefas)
    }
    contador = 0;
    atualizarContador();
}

function atualizarContador() {
    const elementoContador = document.querySelector("h1");
    elementoContador.innerHTML = `TO-DO LIST (${contador})`;
}