const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./database.db');


//== DOADOR
const DOADOR_SCHEMA = `
CREATE TABLE IF NOT EXIST "DOADOR" (
    "ID_DOADOR" INTEGER PRIMATRY KEY AUTOINCREMENT,
    "NOME" VARCHAR(64),
    "CPF" VARCHAR(64),
    "EMAIL" VARCHAR(64),
    "SENHA" VARCHAR(64)
); 
`

const ADD_DOADOR_DATA = `
INSERT INTO DOADOR (ID_DOADOR, NOME, CPF, EMAIL, SENHA)
VALUES
(1, 'Victor Renato Kaue', '29134350411', 'renato@outlook.com.br', 'ck5buidgde')
(2, 'Wallace Correia Miranda', '47296440422', 'wallace.miranda@gmail.com', '#vbtSQ@8priW')
(3, 'Vanessa Cruz Santomauro', '11648375243', 'vanessasantomauro@bol.com.br', '35wdrvfhYmA')
(4, 'Kamily Ximenes Farias', '24977267443', 'kamily.farias@protonmail.com', '7og!c0p7+Fs*')
`

function criaTabelaDoador(){
    db.run(DOADOR_SCHEMA, (erro) => {
   if (erro) console.log("Erro ao criar tabela DOADOR")
  });
}

function populaTabelaDoador() {
    db.run(ADD_PRODUTOS_DATA, (error)=> {
       if (error) console.log("Erro ao popular tabela DOADOR");
    });
}


///== DONATARIO
const DONATARIO_SCHEMA = `
CREATE TABLE IF NOT EXIST "DONATARIO" (
    "ID_DOADOR" INTEGER PRIMATRY KEY AUTOINCREMENT,
    "NOME" VARCHAR(64),
    "EMAIL" VARCHAR(64),
    "SENHA" VARCHAR(64)
); 
`

const ADD_DONATARIO_DATA = `
INSERT INTO DOADOR (ID_DOADOR, NOME, EMAIL, SENHA)
VALUES
(1, 'Victor Renato Kaue', 'renato@outlook.com.br', 'ck5buidgde')
(2, 'Wallace Correia Miranda', 'wallace.miranda@gmail.com', '#vbtSQ@8priW')
(3, 'Vanessa Cruz Santomauro', 'vanessasantomauro@bol.com.br', '35wdrvfhYmA')
(4, 'Kamily Ximenes Farias', 'kamily.farias@protonmail.com', '7og!c0p7+Fs*')
`

function criaTabelaDonatario(){
    db.run(DONATARIO_SCHEMA, (erro) => {
   if (erro) console.log("Erro ao criar tabela DONATARIO")
  });
}

function populaTabelaDonatario() {
    db.run(ADD_PRODUTOS_DATA, (error)=> {
       if (error) console.log("Erro ao popular tabela Donatario");
    });
}


///== ITEM
const ITEM_SCHEMA = `
CREATE TABLE IF NOT EXIST "ITEM" (
    "COD_ITEM" INTEGER PRIMATRY KEY AUTOINCREMENT,
    "NOME" VARCHAR(64)
    "CONDICAO" VARCHAR(64)
); 
`

const ADD_ITEM_DATA = `
INSERT INTO ITEM (COD_ITEM, NOME, CONDICAO)
VALUES
(1, 'Roupa infantil(6pçs - 12anos) tamanho M', 'Usado - Novo')
(2, 'Cesta Básica Mega (80 Itens) Alimento + Limpeza', 'Novo')
(3, 'Aparelho de pressão digital de pulso', 'Bom')
(4, 'Banheira infatil + conjunto de higiene básico', 'Razoável')
`

function criaTabelaItem(){
    db.run(ITEM_SCHEMA, (erro) => {
   if (erro) console.log("Erro ao criar tabela ITEM")
  });
}

function populaTabelaItem() {
    db.run(ADD_PRODUTOS_DATA, (error)=> {
       if (error) console.log("Erro ao popular tabela ITEM");
    });
}

db.serialize( ()=> {
    criaTabelaDoador();
    populaTabelaDoador();

    criaTabelaDonatario();
    populaTabelaDonatario();

    criaTabelaItem();
    populaTabelaItem();
})