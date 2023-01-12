const express = require('express');

// CORS: système qui permet de se protéger des requêtes 
// http d'une origine différente de l'api; navigateur
//  vérifie que réponse du serveur donne son autorisation pour 
// consulter les ressources
var cors = require('cors');
const connection = require('./connection');
const userRoute = require('./routes/user');
const app = express();
app.use(cors());

// analyse requête et traite les données selon le format reçu:
//! JSON ou URLencoded
// les données sont ensuite ajoutées ds 1 
// champ body de la requête (req.body)
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/user', userRoute);


module.exports = app;