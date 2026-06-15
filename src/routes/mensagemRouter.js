var express = require("express");
var router = express.Router();
var mensagemController = require("../controllers/mensagemController");
var multer = require("multer");


var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/"); 
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  }
});

var upload = multer({ storage: storage });

router.post("/enviarMensagem", upload.single("imagem"), function (req, res) {
  mensagemController.enviarMensagem(req, res);
});

router.get("/listarMensagens", function (req, res) {
  mensagemController.listarMensagens(req, res);
});

module.exports = router;