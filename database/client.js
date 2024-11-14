const host = process.env.DB_HOST;
const port = process.env.DB_PORT;
const database = process.env.DB_NAME;
const user = process.env.DB_USER;
const password = process.env.DB_PASSWORD;

import knex from 'knex';

const client = knex({
    client: 'postgresql',
    connection: {
        host,
        port,
        user,
        password,
        database,
        debug: true
    },
});

const result = await client.raw("SELECT NOW()");

console.log("Database can be reached - Time is : " + result.rows[0].now );

await client.destroy();