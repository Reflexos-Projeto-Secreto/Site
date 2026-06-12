CREATE DATABASE reflexos;
USE reflexos;

CREATE TABLE usuario (
idUsuario INT PRIMARY KEY AUTO_INCREMENT,
nomeUsuario VARCHAR(80),
nickname VARCHAR(45),
emailUsuario VARCHAR(80),
senhaUsuario VARCHAR(80)
);

CREATE TABLE mensagem (
idMensagem INT PRIMARY KEY AUTO_INCREMENT,
conteudoMensagem VARCHAR(255),
urlImagem VARCHAR(255),
dataEnvio DATETIME,
fkUsuario INT NOT NULL,
    FOREIGN KEY (fkUsuario)
    REFERENCES usuario (idUsuario)
);

CREATE TABLE quiz (
idQuiz INT PRIMARY KEY AUTO_INCREMENT,
nomeQuiz VARCHAR(45),
tipoQuiz VARCHAR(45)
);

CREATE TABLE resultadoPessoa (
idResultadoPessoa INT PRIMARY KEY AUTO_INCREMENT,
resposta VARCHAR(45),
descricao VARCHAR(255)
);

CREATE TABLE resultadoQuiz (
fkQuiz INT NOT NULL,
fkUsuario INT NOT NULL,
pontuacao INT NULL,
fkResultadoPessoa INT NOT NULL,
    PRIMARY KEY (fkQuiz, fkUsuario, fkResultadoPessoa),
    FOREIGN KEY (fkQuiz)
    REFERENCES quiz(idQuiz),
    FOREIGN KEY (fkUsuario) 
    REFERENCES usuario(idUsuario),
    FOREIGN KEY (fkResultadoPessoa) 
    REFERENCES resultadoPessoa(idResultadoPessoa)
);

CREATE TABLE pergunta (
idPergunta INT PRIMARY KEY AUTO_INCREMENT,
pergunta VARCHAR(255),
fkQuiz INT NOT NULL,
    FOREIGN KEY (fkQuiz) 
    REFERENCES quiz(idQuiz)
);

CREATE TABLE resposta (
idResposta INT PRIMARY KEY AUTO_INCREMENT,
opcao CHAR(1),
validacao BOOLEAN,
descricao VARCHAR(255),
fkPergunta INT NOT NULL,
    FOREIGN KEY (fkPergunta) 
    REFERENCES pergunta (idPergunta)
);