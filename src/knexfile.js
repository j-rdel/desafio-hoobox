require('dotenv').config()

module.exports ={
  development: {
    client: 'mysql2',
    version: '8.0.27',
    connection: {
      host: 'localhost',
      user: 'hoobox',
      port: 3306,
      password: 'hoobox',
      database: 'hoobox',
      connectTimeout: 90000
    },
    migrations: {
      disableMigrationsListValidation: true,
      tableName: 'knex_tables',
      directory: `${__dirname}/database/migrations`
    },
    seeds: {
      directory: `${__dirname}/database/seeds`
    }
  }
};