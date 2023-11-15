import fs from 'fs'
import path from 'path'

export const seed = async (knex) => {
  const csvFilePath = path.resolve('data_db/Automobile_data.json')
  // console.log(`csvFilePath`, csvFilePath)
  try {
    // Read the CSV file and insert data into the database
    const results = JSON.parse(
      fs.readFileSync(csvFilePath, { encoding: 'utf-8' })
    )

    // Inserts seed entries
    await knex('cars').insert(results)
  } catch (err) {
    console.error('ee', err.message)
  }
}
