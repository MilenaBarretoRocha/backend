const express = require('express');
const app = express();
app.use(express.json());
const clientes = [
    {
        nome: "Maria Alice",
        cpf: "123456789",
        rg: "3216547899",
        end: "Rua da felicidade, 50"
    },
    {
        nome: "Maria Yasmim",
        cpf: "123456789",
        rg: "3216547899",
        end: "Rua da felicidade, 50"
    }       
]
app.get('/', function(req, res){
return res.json(clientes)
});
app.listen(8080,function () {
console.log("servidor rodando na porta 8080");
});