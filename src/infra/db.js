import mysql from 'mysql';

const db = mysql.createConnection({
  host: '127.0.0.1',
  user: 'admin',
  password: 'admin',
  database: 'database',
});

db.connect((err) => {
  if (err) {
    console.error(err.message);
  }
  console.log('Conectado ao banco de dados.');
});

//Processamento de sinal
process.on('SIGINT', () => {
  db.end(() => {
    console.log('BD encerrado!');
    process.exit(0);
  });
});

export default db;