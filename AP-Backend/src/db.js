import knex from "knex"
export default knex({
    client: 'pg',
    debug: true,
    
    connection: {
      //connectionString: config.DATABASE_URL,
      host:process.env.DB_HOST,
      port:process.env.DB_PORT,
      user:process.env.DB_USER,
      database:process.env.DB_NAME,
      password: process.env.DB_PASSWORD,
      ssl:process.env.DB_SSL ? { rejectUnauthorized: false } : false,
      
    }
  });
  