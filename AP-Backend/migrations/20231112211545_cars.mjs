/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const up = async (knex) => {
  await knex.raw(`CREATE TABLE cars (
    id              SERIAL PRIMARY KEY,
    symboling INTEGER,
    normalized_losses INTEGER,
    make VARCHAR(50),
    fuel_type VARCHAR(10),
    aspiration VARCHAR(10),
    num_of_doors VARCHAR(10),
    body_style VARCHAR(20),
    drive_wheels VARCHAR(10),
    engine_location VARCHAR(20),
    wheel_base REAL,
    length REAL,
    width REAL,
    height REAL,
    curb_weight INTEGER,
    engine_type VARCHAR(20),
    num_of_cylinders VARCHAR(10),
    engine_size INTEGER,
    fuel_system VARCHAR(20),
    bore REAL,
    stroke REAL,
    compression_ratio REAL,
    horsepower INTEGER,
    peak_rpm INTEGER,
    city_mpg INTEGER,
    highway_mpg INTEGER,
    price REAL
);
`)
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const down = async (knex) => {}
