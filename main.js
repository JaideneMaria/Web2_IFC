const botaoAdiciona = document.querySelector("button");
const inputTarefa = document.querySelector('#tarefa');
const lista = document.querySelector("#lista");

window.addEventListener('DOMContentLoaded', () => {
    fetch('http://localhost:3000/tarefas')
        .then(response => response.json())
        .then(dados => {
            dados.forEach((tarefa) => {
                let itemDiv = document.createElement('div');
                let li = document.createElement('li');
                li.innerText = tarefa.descricao;
                itemDiv.appendChild(li);
                lista.appendChild(itemDiv);
            });
        })
        .catch(error => {
            console.error('Ocorreu um erro:', error);
        });
});


function enviarNovaTarefa() {
    const novaTarefaDescricao = inputTarefa.value;

    fetch('http://localhost:3000/novaTarefa', {
        method: 'POST',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ "descricao": novaTarefaDescricao })
    })
        .then(response => response.json())
        .then(dados => {
            let itemDiv = document.createElement('div');
            let li = document.createElement('li');
            li.innerText = novaTarefaDescricao; 
            itemDiv.appendChild(li);
            lista.appendChild(itemDiv);

            inputTarefa.value = '';
        })
        .catch(error => {
            console.error('Ocorreu um erro:', error);
        });
}

inputTarefa.addEventListener("keyup", (evento) => {
    if (evento.key === "Enter") {
        enviarNovaTarefa();
    }
});

botaoAdiciona.addEventListener('click', enviarNovaTarefa);
