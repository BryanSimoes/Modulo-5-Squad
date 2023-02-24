const mysql = require('mysql');

const connection = mysql.createConnection({
  host: '127.0.0.1',
  user: 'admin',
  password: 'admin',
  database: 'database',
});

connection.connect((err) => {
  if (err) {
    console.error('Erro ao conectar com o banco de dados: ', err);
    return;
  }
  console.log('Conectado ao banco de dados com sucesso!');
});

//== DOADOR
const DOADOR_SCHEMA = `
CREATE TABLE IF NOT EXISTS DOADOR (
    ID_DOADOR INT PRIMARY KEY AUTO_INCREMENT,
    NOME VARCHAR(64),
    CPF VARCHAR(64),
    EMAIL VARCHAR(64),
    SENHA VARCHAR(64)
); 
`;

const ADD_DOADOR_DATA = `
INSERT INTO DOADOR (NOME, CPF, EMAIL, SENHA)
VALUES
('Victor Renato Kaue', '29134350411', 'renato@outlook.com.br', 'ck5buidgde'),
('Wallace Correia Miranda', '47296440422', 'wallace.miranda@gmail.com', '#vbtSQ@8priW'),
('Vanessa Cruz Santomauro', '11648375243', 'vanessasantomauro@bol.com.br', '35wdrvfhYmA'),
('Kamily Ximenes Farias', '24977267443', 'kamily.farias@protonmail.com', '7og!c0p7+Fs*');
`;

function criaTabelaDoador() {
  connection.query(DOADOR_SCHEMA, (err, results) => {
    if (err) console.log('Erro ao criar tabela DOADOR: ', err);
  });
}

function populaTabelaDoador() {
  connection.query(ADD_DOADOR_DATA, (err, results) => {
    if (err) console.log('Erro ao popular tabela DOADOR: ', err);
  });
}

///== DONATARIO
const DONATARIO_SCHEMA = `
CREATE TABLE IF NOT EXISTS DONATARIO (
    ID_DOADOR INT PRIMARY KEY AUTO_INCREMENT,
    NOME VARCHAR(64),
    EMAIL VARCHAR(64),
    SENHA VARCHAR(64)
); 
`;

const ADD_DONATARIO_DATA = `
INSERT INTO DONATARIO (NOME, EMAIL, SENHA)
VALUES
('Victor Renato Kaue', 'renato@outlook.com.br', 'ck5buidgde'),
('Wallace Correia Miranda', 'wallace.miranda@gmail.com', '#vbtSQ@8priW'),
('Vanessa Cruz Santomauro', 'vanessasantomauro@bol.com.br', '35wdrvfhYmA'),
('Kamily Ximenes Farias', 'kamily.farias@protonmail.com', '7og!c0p7+Fs*');
`;

function criaTabelaDonatario() {
  connection.query(DONATARIO_SCHEMA, (err, results) => {
    if (err) console.log('Erro ao criar tabela DONATARIO: ', err);
  });
}

function populaTabelaDonatario() {
  connection.query(ADD_DONATARIO_DATA, (err, results) => {
    if (err) console.log('Erro ao popular tabela DONATARIO: ', err);
  });
}

///== ITEM
const ITEM_SCHEMA = `
CREATE TABLE IF NOT EXISTS ITEM (
    COD_ITEM INT PRIMARY KEY AUTO_INCREMENT,
    NOME VARCHAR(64),
    CONDICAO VARCHAR(64)
); 
`;

const ADD_ITEM_DATA = `
INSERT INTO`