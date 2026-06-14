var database = require("../database/config");

function inserirMensagem(conteudo, urlImagem, fkUsuario) {
  var instrucaoSql = `
  INSERT INTO mensagem (conteudoMensagem, urlImagem, dataEnvio, fkUsuario)
  VALUES ('${conteudo}', ${urlImagem ? `'${urlImagem}'` : 'NULL'}, NOW(), ${fkUsuario})
  `;
  return database.executar(instrucaoSql, [conteudo, urlImagem, fkUsuario]);
}

function listarMensagens() {
  var instrucaoSql = `
    SELECT m.idMensagem, m.conteudoMensagem, m.urlImagem, m.dataEnvio, u.nickname
    FROM mensagem m
    JOIN usuario u ON m.fkUsuario = u.idUsuario
    ORDER BY m.dataEnvio ASC
  `;
  return database.executar(instrucaoSql);
}

module.exports = {
   inserirMensagem,
  listarMensagens
};