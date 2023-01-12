// config() pour charger fichier .env et qui permet 
// d'utiliser.env partout 
require('dotenv').config();

const http = require('http');
const app = require('./index')
const server = http.createServer(app);



// process => objet global, env => propiété de cet objet 
server.listen(process.env.PORT);