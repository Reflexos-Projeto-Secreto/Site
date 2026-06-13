var express = require("express");
var router = express.Router();
var configController = require("../controllers/configController");

router.post("/mudarInfo", function (req, res) {
    configController.mudarInfo(req, res);
});

router.get("/buscarSenha", function (req, res) {
    configController.buscarSenha(req, res);
});

module.exports = router;