var quizModel = require("../models/quizModel")

function enviarPersonalidade(req, res) {
    var fkUsuario = req.body.fkUsuario
    var fkQuiz = req.body.fkQuiz
    var resultado = req.body.resultado

     var fkResultadoPessoa
    if (resultado == "julia")       fkResultadoPessoa = 1
    else if (resultado == "debora") fkResultadoPessoa = 2
    else                            fkResultadoPessoa = 3

    quizModel.salvarResultado(fkQuiz, fkUsuario, null, fkResultadoPessoa)
        .then(function(retorno) {
            res.status(201).json({ mensagem: "Resultado de personalidade salvo!" })
        }).catch(function(erro) {
            res.status(500).json({ erro: erro.message })
        })
}

function enviarConhecimento(req, res) {
    var fkUsuario = req.body.fkUsuario
    var fkQuiz = req.body.fkQuiz
    var pontuacaoFinal = req.body.pontuacaoFinal

    var fkResultadoPessoa
    if (pontuacaoFinal <= 1)      fkResultadoPessoa = 4  
    else if (pontuacaoFinal == 2) fkResultadoPessoa = 5  
    else                          fkResultadoPessoa = 6  
    quizModel.salvarResultado(fkQuiz, fkUsuario, pontuacaoFinal, fkResultadoPessoa)
        .then(function(retorno) {
            res.status(201).json({ mensagem: "Resultado de conhecimento salvo!" })
        }).catch(function(erro) {
            res.status(500).json({ erro: erro.message })
        })
}

function enviarJogo(req, res) {
    var fkUsuario = req.body.fkUsuario
    var fkQuiz = req.body.fkQuiz
    var pontuacaoJogador1 = req.body.pontuacaoJogador1
    var pontuacaoJogador2 = req.body.pontuacaoJogador2 

    var pontuacao = Math.max(pontuacaoJogador1, pontuacaoJogador2)

     var fkResultadoPessoa
    if (pontuacao <= 1)      fkResultadoPessoa = 4 
    else if (pontuacao == 2) fkResultadoPessoa = 5  
    else                     fkResultadoPessoa = 6  

    quizModel.salvarResultado(fkQuiz, fkUsuario, pontuacao, fkResultadoPessoa)
        .then(function(retorno) {
            res.status(201).json({ mensagem: "Resultado do jogo salvo!" })
        }).catch(function(erro) {
            res.status(500).json({ erro: erro.message })
        })
}

module.exports = {
    enviarPersonalidade,
    enviarConhecimento,
    enviarJogo
}