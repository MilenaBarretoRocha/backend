const express = require('express');
const app = express();
app.get('/', function(req, res){
res.send("olá mundo");
});
app.listen(8080,function () {
console.log("servidor rodando na porta 8080");
});