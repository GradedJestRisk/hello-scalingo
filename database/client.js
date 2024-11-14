import knex from 'knex';

const host = process.env.DB_HOST;
const port = process.env.DB_PORT;
const database = process.env.DB_NAME;
const user = process.env.DB_USER;
const password = process.env.DB_PASSWORD;

const scalingoConnectionString = process.env.SCALINGO_POSTGRESQL_URL;
const localConnectionString = `postgres://${user}:${password}@${host}:${port}/${database}`;

const connectionString = scalingoConnectionString ? scalingoConnectionString : localConnectionString;

const client = knex({
    client: 'postgresql',
    connection: {
        connectionString,
        pool: { min: 1, max: 1 },
    },
});

const status = async ()=>{
    const result = await client.raw("SELECT NOW()");
    if (result.rows[0].now){
        return "Database is up"
    } else {
        return "Database is down"
    }
}

export { status };