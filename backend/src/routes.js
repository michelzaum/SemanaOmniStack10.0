const { Router } = require('express');
const axios = require('axios');

const routes = Router();

routes.post('/devs', async (request, response) => {
    const { github_username } = request.body;

    const apiResponse = await axios.get(`https://api.github.com/users/${github_username}`);

    console.log(apiResponse.data);
    //A RESPOSTA DO SERVIDOR SERÁ UM JSON.
    return response.json({message: 'Hello world'});
});

module.exports = routes;