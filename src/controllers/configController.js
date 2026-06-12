var configModel = require("../models/configModel");

function mudarInfo(req, res){
    var nome = req.body.nomeServerNovo;
    var username = req.body.usernameServerNovo;
    var email = req.body.emailServerNovo;
    var senha = req.body.senhaServerNovo;
    var id = req.body.idUsuario;

    if (nome == undefined) {
        res.status(400).send("Seu nome está undefined!");
    } else if (email == undefined) {
        res.status(400).send("Seu email está undefined!");
    } else if (senha == undefined) {
        res.status(400).send("Sua senha está undefined!");
    } else if (username == undefined) {
        res.status(400).send("Seu username está undefined!");
    }

    configModel.mudarInfo(nome, username, email, senha, id)
        .then(
            function (resultado) {
                res.json(resultado);
            }
        ).catch(
            function (erro) {
                console.log(erro);
                console.log(
                    "\nHouve um erro ao mudar suas informações! Erro: ",
                    erro.sqlMessage
                );
                res.status(500).json(erro.sqlMessage);
            }
        )
}

module.exports = {
    mudarInfo
}