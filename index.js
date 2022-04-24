const express = require("express");
const app = express();
const bodyParser  = require("body-parser");

app.use(express.static('public')); 

const connection = require ('./database/database');

//database
connection
    .authenticate()
    .then(() => {
        console.log("Conexao feita com banco de dados");
    })
    .catch((msgErro)=> {
        console.log(msgErro);
    })


app.use(bodyParser.urlencoded({
    extends: false
}));

app.use(bodyParser.json());

app.get("/", (req,res) => {

    res.send("Bem vindo uhuul!");
});

app.set("view engine", "ejs"); 


app.listen(8080, () => {
    console.log("O Servidor esta rodando");
})