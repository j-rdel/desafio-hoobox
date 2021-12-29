exports.up = async knex => knex.schema.createTable('doctor', table => {
    table.increments('id_doctor').primary();
    table.string('firstName').notNullable();
    table.string('lastName').notNullable();
    table.string('user').unique().notNullable();
    table.string('email').unique().notNullable();
    table.string('password').notNullable();
  
    table.timestamp('created_at').defaultTo(knex.fn.now());
    table.timestamp('updated_at').defaultTo(knex.fn.now());
  }).then(() => {
      console.log("Doctor Table is Created")
  });
  
  exports.down = async knex => knex.schema.dropTable('doctor');