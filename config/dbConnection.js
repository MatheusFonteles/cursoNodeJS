var mysql = require('mysql2');

var connMySQL = function(){
    console.log('conexao com o bd foi estabelecida')
    return mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'M@theus.123',
        database: 'portal_noticias',
    });
}

module.exports = function() {
    console.log('O autoload carregou o módulo de conexao com o bd')
    return connMySQL;
};