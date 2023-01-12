// importer mysql
const mysql = require('mysql');
// importer le package pour utiliser les variables d'environnement
require('dotenv').config();


// les paramètres de connexion à la BDD
var connection = mysql.createConnection({
    
    port: process.env.DB_PORT,
    host: process.env.DB_HOST,
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
})

// si il n'y apas d'erreurs alors on log ,
//  sinon si il y a une erreur on log 
// connexion à la BDD
connection.connect((err) => {
    if(!err){
        console.log('Connected !');
    }else{
        console.log('NOT CONNECTED',err);
    }
});

//! si erreur de connection taper cmd suivante dans mysql shell : 
//! ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'password';
module.exports = connection;