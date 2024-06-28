const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser'); // Adicionar body-parser

const app = express();

// Middleware para habilitar o CORS
app.use(cors({
    origin: '*'
}));

app.use(express.static('public'));

// Middleware para processar JSON no corpo da requisição
app.use(express.json());

// Middleware para processar form data (opcional)
// app.use(express.urlencoded({ extended: true }));

// Rota de exemplo
app.get('/', (req, res) => {
    res.send('Olá, mundo!');
});

// Rota para a página sobre
app.get('/sobre', (req, res) => {
    res.send("Esta é a página sobre");
});

// Rota para obter todas as tarefas
app.get("/tarefas", (req, res) => {
    const tarefas = require("./public/tarefas.json");
    res.json(tarefas);
});

// Rota para adicionar uma nova tarefa
app.post('/novaTarefa', (req, res) => {
    const novaTarefa = req.body; // Acessa o corpo da requisição

    // Simular a adição ao arquivo de tarefas
    const tarefas = require("./public/tarefas.json");
    tarefas.push({
        id: tarefas.length + 1, // Simulando um novo ID
        descricao: novaTarefa.descricao,
        status: 0
    });

    // Normalmente, você salvaria isso de volta em um banco de dados ou arquivo JSON.
    // Aqui, apenas retornamos a nova tarefa como confirmação
    res.json(novaTarefa);
});

// Iniciar o servidor
app.listen(3000, () => {
    console.log('Servidor rodando em http://localhost:3000');
});
