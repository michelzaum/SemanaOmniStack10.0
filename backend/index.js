const express = require('express');

const app = express();

app.use(express.json());

/*
--- TIPOS DE PARÂMETROS DO EXPRESS ---

- Query params: req.query (Filtros, ordenação, paginação, ...).
- Route params: request.params (Identificar um recurso na alteração ou remoção).
- Body: request.body (Dados para criação ou alteração de um registro).
*/

app.post('/users', (request, response) => {
    console.log(request.body);
    //A RESPOSTA DO SERVIDOR SERÁ UM JSON.
    return response.json({message: 'Hello world'});
});

app.listen(3333);