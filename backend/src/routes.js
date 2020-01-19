const { Router } = require('express');
const DevController = require('./controllers/DevController');
const SearchController = require('./controllers/SearchController');;

const routes = Router();

//MÉTODO DE LISTAGEM DE DEVS
routes.get('/devs', DevController.index);

//MÉTODO DE CRIAÇÃO DE DEVS
routes.post('/devs', DevController.create);

//MÉTODO PARA BUSCAR OS DEVS UTILIZANDO FILTROS
routes.get('/search', SearchController.index);

//MÉTODO DE EDIÇÃO DE DEVS
routes.put('/dev/:id', DevController.update);

//MÉTODO DE EXCLUSÃO DE DEVS
routes.delete('/dev/:id', DevController.delete);

module.exports = routes;