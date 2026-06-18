var express = require("express");
var router = express.Router();
var dadosController = require("../controllers/dadosController");

router.get("/mes-mais-mensagens", dadosController.MesComMaisMensagens);
router.get("/primeiro-pontuacao", dadosController.PrimeiroPontuacao);
router.get("/quem-mais-mensagens", dadosController.QuemMaisMensagens);
router.get("/acertos-erros", dadosController.AcertosErros);
router.get("/mensagens-por-mes", dadosController.MensagensPorMes);

module.exports = router;