import fs from 'fs'
import { readdir } from 'fs/promises'
import path from 'path'
import crypto from 'crypto'
import { faker } from '@faker-js/faker'
// import * as faker  from '@faker-js/faker'

const getDirectories = async (source) =>
  (await readdir(source, { withFileTypes: true }))
    .filter((dirent) => dirent.isDirectory())
    .map((dirent) => dirent.name)

function generateSKU() {
  // Generate a random string
  const randomPart = crypto.randomBytes(4).toString('hex')
  // Combine them to form a SKU
  return `SKU-${randomPart}`
}

export const seed = async (knex) => {
  // console.log ("FAKER",faker) 
  // return
  const partsFolder = path.resolve('public/static/parts')
    // console.log(partsFolder)

  const products = await getDirectories(partsFolder)
  // console.log(products)
  for (const product of products) {
    // console.log(`product`, product)
    let category = await knex('categories').where('name', product).first()
    if (!category) {
      category = await knex('categories').insert({
        name: product,
        created_at: new Date(),
        updated_at: new Date()
      })
      category = await knex('categories').where('name', product).first()
    }
    const files = fs.readdirSync(`${partsFolder}/${product}`)
    // console.log(`files`, files)
    for (const file of files) {
      const image = `${partsFolder}/${product}/${file}`
      // console.log(image)
      const car = await knex('cars')
        .orderByRaw('RANDOM()')
        .first()
        .catch((err) => {
          console.error(err)
        })

      const part = {
        category_id: category.id,
        car_id: car.id,
        price: Number(faker.commerce.price({ min: 30, max: 5000 })).toFixed(),
        total_inventory: faker.string.numeric({
          length: { min: 1, max: 3 }
        }),
        image_url: `${product}/${file}`,
        created_at: new Date(),
        updated_at: new Date()
      }
      console.log(part)
      await knex('parts').insert(part)
    }
  }

  // UPDATE parts SET sku = CONCAT('SKU', '-', id) WHERE true;

  // Inserts seed entries
  // await knex('table_name').insert([
  //   {id: 1, colName: 'rowValue1'},
  //   {id: 2, colName: 'rowValue2'},
  //   {id: 3, colName: 'rowValue3'}
  // ]);
}
