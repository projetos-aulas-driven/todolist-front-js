let contador = 3;

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