var ambiente_processo = 'producao';
//var ambiente_processo = 'desenvolvimento';

var caminho_env = ambiente_processo === 'producao' ? '.env' : '.env.dev';
// Acima, temos o uso do operador ternário para definir o caminho do arquivo .env
// A sintaxe do operador ternário é: condição ? valor_se_verdadeiro : valor_se_falso

require("dotenv").config({ path: caminho_env });

var express = require("express");
var cors = require("cors");
var path = require("path");
var PORTA_APP = process.env.APP_PORT;
var HOST_APP = process.env.APP_HOST;

var app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(express.static(path.join(__dirname, "public")));

var indexRouter = require("./src/routes/index");
var quizRouter = require("./src/routes/quizRouter")

app.use("/quiz", quizRouter);
app.use("/", indexRouter);

app.listen(PORTA_APP, function () {
    console.log(`                                                           
    ▄▄▄▄▄▄▄           ▄▄ ▄▄                         
    ███▀▀███▄        ██  ██                         
    ███▄▄███▀ ▄█▀█▄ ▀██▀ ██ ▄█▀█▄ ██ ██ ▄███▄ ▄█▀▀▀ 
    ███▀▀██▄  ██▄█▀  ██  ██ ██▄█▀  ███  ██ ██ ▀███▄ 
    ███  ▀███ ▀█▄▄▄  ██  ██ ▀█▄▄▄ ██ ██ ▀███▀ ▄▄▄█▀ 
                                                                                                                                                                                                            
    Servidor do seu site já está rodando! http://${HOST_APP}:${PORTA_APP} :. `);
});
