const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'btbz93afntuww2xjiosn-mysql.services.clever-cloud.com',
  user: 'uledzxasrrpnrqui',
  password: 'iPS2U764r6glD2mIhTuI',
  database: 'btbz93afntuww2xjiosn',
});

connection.connect(err => {
  if (err) {
    console.error('Erro ao conectar ao banco de dados:', err);
    return;
  }
  console.log('Conectado ao banco de dados');
});

module.exports = connection;