var database = require("../database/config")

function salvarResultado(fkQuiz, fkUsuario, pontuacao, fkResultadoPessoa) {
    console.log("ACESSEI O QUIZ MODEL - function salvarResultado():", fkQuiz, fkUsuario, pontuacao, fkResultadoPessoa)
    
    var instrucaoSql = `
        INSERT INTO resultadoQuiz (fkQuiz, fkUsuario, pontuacao, fkResultadoPessoa)
        VALUES (${fkQuiz}, ${fkUsuario}, ${pontuacao}, ${fkResultadoPessoa})
        ON DUPLICATE KEY UPDATE 
            pontuacao = ${pontuacao},
            fkResultadoPessoa = ${fkResultadoPessoa};
    `
    console.log("Executando a instrução SQL: \n" + instrucaoSql)
    return database.executar(instrucaoSql)
}

module.exports = {
    salvarResultado
}