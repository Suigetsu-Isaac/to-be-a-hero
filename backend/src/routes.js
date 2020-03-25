const express = require('express');

const OngsController = require('./Controllers/OngsController');
const IncidentController = require('./Controllers/IncidentController');
const ProfileController = require('./Controllers/ProfileController');
const SessionController = require('./Controllers/SessionController');

const routes = express.Router();

routes.post('/session',SessionController.create);

//Criando Ongs
routes.get('/ongs', OngsController.index);
//Listando Ongs
routes.post('/ongs', OngsController.create);


//Listando Casos(incidents)
routes.get('/incidents', IncidentController.index);
//Criando Casos(incidents)
routes.post('/incidents', IncidentController.create);
//Deletando Casos(incidents)
routes.delete('/incidents/:id',IncidentController.delete);

//listando Caso Especifico(profile)
routes.get('/profile',ProfileController.index);

module.exports = routes;