// Update with your config settings.
import path from 'path'
/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
const connection = {
  client: 'postgresql',
  connection: {
    host: 'localhost',
    database: 'autoparts',
    user: 'postgres',
    password: 'postgres'
  },
  pool: {
    min: 2,
    max: 10
  },
  migrations: {
    loadExtensions: ['.js', '.mjs'],
    extension: 'mjs',
    directory: './migrations',
    tableName: 'migrations'
  },
  seeds: {
    extension: 'mjs',
    directory: './seeds/dev',
    loadExtensions: ['.js', '.mjs']
  }
}

export default {
  development: connection
}
