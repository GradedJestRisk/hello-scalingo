const up = async (knex) => {
    await knex.schema.createTable('users', function (table) {
        table.increments();
        table.string('firstName');
        table.string('lastName');
        table.string('email');
    });
};

const down = async (knex) => {
    await knex.schema.dropTable('users');
};

export {down, up};