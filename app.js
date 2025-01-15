//GERENCIAR UMA LISTA DE TAREFAS

const express = require("express"); //baixando bibliotecas
const bodyParser = require("body-parser");
const fs = require("fs");
const { error } = require("console");

const app = express(); //redirecionando express em app
const port = 3000; //direcionando onde o site vai ficar

app.use(bodyParser.json()); //interpretar o JSON

let listaTarefas = JSON.parse(fs.readFileSync('tarefas.json', 'utf8')); //transformar o json em variavel

//endpoint get - retornar todas as tarefas da lista

app.get('/listaTarefas', (req, res) => {
    res.json(listaTarefas)
});

//endpoint post - adicionar tarefa na lista

app.post('/listaTarefas', (req, res) => {
    //as variaveis que vao no corpo do json
    const {titulo, descricao} = req.body;
    if(!titulo){
        return res.status(400).json({ error: 'Coloque o titulo!'});
    }

    //pedindo a descrição e titulo da tarefa
    const novaTarefa = {id: Date.now(), titulo, descricao: descricao || ''};
    listaTarefas.push(novaTarefa);

    //colocando a nova tarefa no json
    fs.writeFileSync('tarefas.json', JSON.stringify(listaTarefas, null, 2));
    res.status(201).json(novaTarefa);
});

//endpoint put - atualizar tarefa com o ID

app.put('/listaTarefas/:id', (req, res) => {
    //trazendo os parametros do JSON em string
    const { id } = req.params;
    const { titulo, descricao } = req.body;

    //transformando a variavel id para tarefa em inteiro para descobrir o indice
    const tarefaID = parseInt(id);
    //verificando se existe esse id na lista    
    if(isNaN(tarefaID)){
       return res.status(400).json({ error: "Indice invalido!"});
    };

    const tarefa = listaTarefas.find(tarefa => tarefa.id === tarefaID);

    if(!tarefa){
        return res.status(404).json({ error: "Tarefa não encontrada!" });
    }

    //verifica se a nova tarefa é igual a antiga se nao, é atualizada
    if(titulo) tarefa.titulo = titulo;
    if(descricao) tarefa.descricao = descricao;

    //passando o arquivo pro JSON e salvando
    fs.writeFileSync('tarefas.json', JSON.stringify(listaTarefas, null || 2 ));
    res.json(tarefa);
});













app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}` )
});