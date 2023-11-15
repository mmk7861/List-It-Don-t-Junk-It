/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const up = async (knex) => {
  await knex.raw(`CREATE TABLE categories
(
    id         SERIAL PRIMARY KEY,
    name       text,
    created_at timestamp,
    updated_at timestamp
);`)
  await knex.raw(`CREATE TABLE orders
(
    id         SERIAL PRIMARY KEY,
    ip         text,
    country_id    int default NULL,
    user_id    integer references users (id),
    status     text,
    created_at timestamp,
    updated_at timestamp
);`)
  await knex.raw(`CREATE TABLE parts
(
    id              SERIAL PRIMARY KEY,
    car_id        integer references cars(id),
    category_id        integer references categories(id),
    price           numeric,
    total_inventory integer default 0,
    image_url text default null,
    created_at      timestamp,
    updated_at      timestamp
);`)
  await knex.raw(`CREATE TABLE order_item
(
    id       SERIAL PRIMARY KEY,
    order_id integer references orders (id),
    part_id  integer references parts (id),
    price    numeric    
);`)

  await knex.raw(`CREATE TABLE IF NOT EXISTS country
(
    id        SERIAL PRIMARY KEY,
    iso       varchar(2)  NOT NULL,
    name      varchar(80) NOT NULL,
    nicename  varchar(80) NOT NULL,
    iso3      varchar(3) DEFAULT NULL,
    numcode   smallint DEFAULT NULL,
    phonecode int NOT NULL

)`)
  await knex.raw(`CREATE UNIQUE INDEX users_email_idx ON users (email);`)
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const down = async (knex) => {}
