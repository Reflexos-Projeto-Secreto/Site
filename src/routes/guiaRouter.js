var express = require("express");
var router = express.Router();
var { guiaController } = require("../controllers/guiaController");

router.post("/", guiaController);

module.exports = router;