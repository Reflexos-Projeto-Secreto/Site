var express = require("express");
var router = express.Router();
var path = require("path");

var usuariosRouter = require("./usuarios");

router.use("/usuarios", usuariosRouter);

router.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "../../public/pages/login.html"));
});

module.exports = router;