var express = require("express");
var router = express.Router();
var path = require("path");

var usuariosRouter = require("./usuarios");
var configRouter = require("./config")

router.use("/usuarios", usuariosRouter);
router.use("/config", configRouter)

router.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "../../public/pages/login.html"));
});

router.get("/elevador", function (req, res) {
    res.sendFile(path.join(__dirname, "../../public/pages/elevador.html"));
});

router.get("/config", function (req, res) {
    res.sendFile(path.join(__dirname, "../../public/pages/config.html"));
});


module.exports = router;