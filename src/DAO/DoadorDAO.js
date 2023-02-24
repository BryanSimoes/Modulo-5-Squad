// Importa o bd.js para poder usar o banco de dados simulado
import db from "../infra/db.js"


// Essa classe encapsula o acesso ao Banco de Dados. Todos os métodos abaixos são estáticos. Isso quer dizer que não precisamos instanciar a classe para usá-los e serão chamados pela classe UsuarioController... Alguns vão dar retorno e para outros, isso não será necessário
class DoadorDAO {

// GET  --  Função ALL - Retorna todas as linhas. No callback existe o argumento ROWS
  static listar() {
    const query = "SELECT * FROM DOADOR";
    return new Promise((resolve, reject) => {
      db.all(query, (err, rows) => {
        if (err) {
          reject(err);
        }
        resolve(rows);
      });
    });
  }

 // GET  --  
  static buscarPorID(id) {
    const query = "SELECT * FROM DOADOR WHERE id = ?";
    return new Promise((resolve, reject) => {
      db.get(query, [id], (err, row) => {
        if (err) {
          reject(false);
        }
        resolve(row);
      });
    });
  }

// POST  --  
  static inserir(doador){
    const query = `INSERT INTO DOADOR (nome, CPF, email, senha) VALUES (?, ?, ?, ?)`;

    return new Promise((resolve, reject) => {
      db.run(query, [doador.nome, doador.CPF, doador.email, doador.senha], (err) =>{
        if (err){
          reject({
            mensagem: "Erro ao inserir o doador",
            error:err,
          });
        }
        resolve(doador);
      });
    });
  }

  // PUT  --  
  static atualizar(id, doador){
    const query =
    "UPDATE DOADOR SET nome = ?, CPF = ?, email = ?, senha = ? WHERE id = ?";
    return new Promise((resolve, reject) =>{
      db.run(
        query,
        [doador.nome, doador.CPF, doador.email, doador.senha, id],
        (err)=>{
          if (err){
            reject({
              mensagem: "Erro ao atualizar o doador",
              erro: err,
            });
          }
          resolve({
            mensagem: "Doador atualizado com sucesso"
          });
        }
      );


    });
  }

 // DELETE  --  
  static deletar(id){
    const query = "DELETE FROM DOADOR WHERE id = ?";
    return new Promise((resolve,reject) =>{
      db.run(query, [id], (err) =>{
        if(err){
          reject({
            mensagem: "Erro ao deletar doador",
            erro: err,
          });
        }
        resolve({mensagem: "Doador deletado com sucesso", id: id});
      });
    });
  }
}


// Exporta a classe
export default DoadorDAO;