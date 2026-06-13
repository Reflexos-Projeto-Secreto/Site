var express = require("express")
var router = express.Router()
var emailService = require("./EmailService")

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

module.exports = router