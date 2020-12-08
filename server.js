'use strict';

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
