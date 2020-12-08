'use strict';
const axios = require('axios');

const Hapi = require('@hapi/hapi');

const init = async () => {

    const port = parseInt(process.env.PORT, 10) || 3000;

    const server = Hapi.server({
        port
    });

    server.route({
        method: 'GET',
        path: '/',
        handler: (request, h) => {
            return 'Hello World!';
        }
    });

    server.route({
        method: 'GET',
        path: '/pix-api-production-version',
        handler: async (request, h) => {
            const baseUrl = 'https://api.pix.fr/api';
            let response;
            try {
                response = await axios.get(baseUrl);
            } catch (error) {
                response = error;
            }

            return JSON.stringify(response.data);
        }
    });

    server.events.on('response',  (request) =>{
        console.log(request.info.remoteAddress + ': ' + request.method.toUpperCase() + ' ' + request.path + ' --> ' + request.response.statusCode);
    });

    await server.start();
    console.log('Server running on %s', server.info.uri);
};

process.on('unhandledRejection', (err) => {

    console.log(err);
    process.exit(1);
});

init();
