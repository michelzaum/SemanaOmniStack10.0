const Dev = require('../models/Dev');
const parseStringAsArray = require('../utils/parseStringAsArray');

module.exports = {
    async index(request, response) {
        //BUSCAR OS DEVS EM UM RAIO DE 10KM.
        //FILTRAR POR TECNOLOGIA.
        const { latitude, longitude, techs } = request.query;

        const techsArrays = parseStringAsArray(techs);

        const devs = await Dev.find({
            techs: {
                //$IN É UM OPERADOR LÓGICO DO MONGODB.
                $in: techsArrays,
            },
            location: {
                $near: {
                    $geometry: {
                        type: 'Point',
                        coordinates: [longitude, latitude]
                    },
                    $maxDistance: 10000, //DISTANCIA MÁXIMA DE 10KM.
                }
            }
        });

        return response.json({ devs });
    }
}