//GERENCIAR UMA LISTA DE TAREFAS

const express = require("express"); 
const bodyParser = require("body-parser");
const fs = require("fs");

const app = express();
const port = 3000;

app.use(bodyParser.json()); //Interpretar o JSON
