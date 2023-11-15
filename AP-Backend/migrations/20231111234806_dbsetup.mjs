/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function up(knex) {
  await knex.raw(`CREATE TABLE users
(
    id          SERIAL PRIMARY KEY,
    name        text,
    email       text,
    password    text,
    type        SMALLINT,
    loggedin_at timestamp,
    created_at  timestamp,
    updated_at  timestamp
);`)
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function down(knex) {}
