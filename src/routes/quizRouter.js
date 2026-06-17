var express = require("express")
var router = express.Router()
var emailService = require("./EmailService")

var quizController = require("../controllers/quizController")

router.post("/enviarEmail", function (req, res) {
    var email = req.body.email
    var nome = req.body.nome
    var resultado = req.body.resultado

    emailService.enviarEmail(email, nome, resultado)
        .then(function () {
            res.json({ mensagem: "Email enviado!" })
            console.log("Enviando email para:", email)
            console.log("Resultado:", resultado)
        }).catch(function (erro) {
            console.log(erro)
            res.status(500).json({ mensagem: "Erro ao enviar email!" })
        })
})

router.post("/enviarResultadoConhecimento", function (req, res){
    var pontuacaoFinal = req.body.pontuacaoFinal

    quizController.enviarConhecimento(req, res);
})

router.post("/enviarResultadoJogo", function (req, res){
    var pontuacaoJulia = req.body.pontuacaoJulia
    var pontuacaoDebora = req.body.pontuacaoDebora

    quizController.enviarJogo(req, res);
})

router.post("/enviarResultadoPersonalidade", function (req, res){
    var resultado = req.body.resultado

    quizController.enviarPersonalidade(req, res);
})

module.exports = router