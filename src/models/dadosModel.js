var database = require("../database/config");

function MesComMaisMensagens() {
    var instrucaoSql = `
        SELECT MONTH(dataEnvio) AS mes, COUNT(*) AS total
        FROM mensagem
        GROUP BY MONTH(dataEnvio)
        ORDER BY total DESC
        LIMIT 1;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function PrimeiroPontuacao() {
    var instrucaoSql = `
        SELECT u.nomeUsuario, SUM(rq.pontuacao) AS totalPontos
        FROM resultadoQuiz rq
        JOIN usuario u ON u.idUsuario = rq.fkUsuario
        GROUP BY rq.fkUsuario
        ORDER BY totalPontos DESC
        LIMIT 1;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function QuemMaisMensagens() {
    var instrucaoSql = `
        SELECT u.nomeUsuario, COUNT(*) AS totalMensagens
        FROM mensagem m
        JOIN usuario u ON u.idUsuario = m.fkUsuario
        GROUP BY m.fkUsuario
        ORDER BY totalMensagens DESC
        LIMIT 1;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function AcertosErros() {
    var instrucaoSql = `
        SELECT 
            SUM(rq.pontuacao) AS acertos,
            COUNT(*) * 10 - SUM(rq.pontuacao) AS erros
        FROM resultadoQuiz rq
        JOIN quiz q ON q.idQuiz = rq.fkQuiz
        WHERE q.tipoQuiz = 'conhecimento'
        AND rq.pontuacao IS NOT NULL;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function MensagensPorMes() {
    var instrucaoSql = `
        SELECT MONTH(dataEnvio) AS mes, COUNT(*) AS total
        FROM mensagem
        GROUP BY MONTH(dataEnvio)
        ORDER BY mes;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    MesComMaisMensagens,
    PrimeiroPontuacao,
    QuemMaisMensagens,
    AcertosErros,
    MensagensPorMes,
}