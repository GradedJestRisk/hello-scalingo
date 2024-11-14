const host = process.env.DB_HOST;
const port = process.env.DB_PORT;
const database = process.env.DB_NAME;
const user = process.env.DB_USER;
const password = process.env.DB_PASSWORD;

const scalingoConnectionString = process.env.SCALINGO_POSTGRESQL_URL;
const localConnectionString = `postgres://${user}:${password}@${host}:${port}/${database}`;

const connectionString = scalingoConnectionString ? scalingoConnectionString : localConnectionString;

const clientConfiguration = {
    client: 'postgresql',
    connection: {
        connectionString,
        pool: { min: 1, max: 1 },
    },
    migrations: {
        tableName: 'knex_migrations',
        directory: './migrations',
    }
};


export default clientConfiguration ;

