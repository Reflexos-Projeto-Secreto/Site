var database = require("../database/config")

function mudarInfo(nome, username, email, senha, id) {
    console.log("ACESSEI O CONFIG MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): ", email, senha)
    var instrucaoSql = `
        UPDATE usuario SET nomeUsuario = '${nome}', nickname = '${username}', emailUsuario = '${email}', senhaUsuario = '${senha}' WHERE idUsuario = ${id};
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarSenha(id){
     var instrucaoSql = `
        SELECT senhaUsuario FROM usuario WHERE idUsuario = ${id};
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    mudarInfo,
    buscarSenha
}