var mensagemModel = require("../models/mensagemModel");

function enviarMensagem(req, res) {
  var conteudo = req.body.conteudoMensagem || null;
  var fkUsuario = req.body.fkUsuario;
  var urlImagem = req.file
    ? "/uploads/" + req.file.filename
    : null;

  if (!conteudo && !urlImagem) {
    return res.status(400).json({ erro: "Mensagem vazia." });
  }

  mensagemModel.inserirMensagem(conteudo, urlImagem, fkUsuario)
    .then(function (resultado) {
      res.json({
        ok: true,
        idMensagem: resultado.insertId,
        urlImagem: urlImagem
      });
    })
    .catch(function (erro) {
      console.log("ERRO NO INSERT:", erro);
      res.status(500).json({ erro: erro.message });
    });
}

function listarMensagens(req, res) {
  mensagemModel.listarMensagens()
    .then(function (resultado) {
      res.json(resultado);
    })
    .catch(function (erro) {
      console.log("ERRO AO LISTAR:", erro);
      res.status(500).json({ erro: erro.message });
    });
}

module.exports = { 
  enviarMensagem,
  listarMensagens

};