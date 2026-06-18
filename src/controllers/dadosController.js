var dadosModel = require("../models/dadosModel");

function MesComMaisMensagens(req, res) {
    dadosModel.MesComMaisMensagens()
        .then(function (resultado) {
            res.json(resultado[0]);
        }).catch(function (erro) {
            console.log(erro);
            res.status(500).json(erro.sqlMessage);
        });
}

function PrimeiroPontuacao(req, res) {
    dadosModel.PrimeiroPontuacao()
        .then(function (resultado) {
            res.json(resultado[0]);
        }).catch(function (erro) {
            console.log(erro);
            res.status(500).json(erro.sqlMessage);
        });
}

function QuemMaisMensagens(req, res) {
    dadosModel.QuemMaisMensagens()
        .then(function (resultado) {
            res.json(resultado[0]);
        }).catch(function (erro) {
            console.log(erro);
            res.status(500).json(erro.sqlMessage);
        });
}

function AcertosErros(req, res) {
    dadosModel.AcertosErros()
        .then(function (resultado) {
            res.json(resultado[0]);
        }).catch(function (erro) {
            console.log(erro);
            res.status(500).json(erro.sqlMessage);
        });
}

function MensagensPorMes(req, res) {
    dadosModel.MensagensPorMes()
        .then(function (resultado) {
            res.json(resultado);
        }).catch(function (erro) {
            console.log(erro);
            res.status(500).json(erro.sqlMessage);
        });
}

module.exports = {
    MesComMaisMensagens,
    PrimeiroPontuacao,
    QuemMaisMensagens,
    AcertosErros,
    MensagensPorMes,
}