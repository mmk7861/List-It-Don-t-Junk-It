import { Router } from 'express'
import db from '../../db.js'
import { formatPartData } from './parts.model.js'
import knex from 'knex'

const router = Router()

router
  .route('/parts')
  .get(async (req, res) => {
    console.log(req.query)
    const limit = req.query.limit || 50
    const offset = req.query.offset || 0
    const sort = req.query.sort || ''
    const direction = req.query.asc === 'true' ? 'ASC' : 'DESC'
    console.log(
      `${req.query.asc} === 'true' ? 'ASC' : 'DESC'`,
      typeof req.query.asc,
      direction
    )

    const countQuery = db('parts')
      .innerJoin('cars', 'cars.id', '=', 'parts.car_id')
      .innerJoin('categories', 'categories.id', '=', 'parts.category_id')

    const partsQuery = db('parts')
      .innerJoin('cars', 'cars.id', '=', 'parts.car_id')
      .innerJoin('categories', 'categories.id', '=', 'parts.category_id')

    if (sort && sort !== '') {
      partsQuery.orderBy(sort, direction, 'last')
    }

    const { count } = await countQuery.count().first()
    const items = await partsQuery
      .select([
        'parts.id',
        'categories.name',
        'cars.make',
        'cars.fuel_type',
        'parts.price',
        'parts.total_inventory',
        'cars.engine_type',
        'cars.fuel_system',
        'parts.image_url'
      ])
      .limit(limit)
      .offset(offset)
      .then((data) => data.map((d) => formatPartData(d)))

    res.json({
      meta: {
        count,
        limit,
        offset,
        sort
      },
      items
    })
  })
  .post(async (req, res) => {
    const data = req.body
    // await db('parts').insert(data)
    res.json(data)
  })

router
  .route('/parts/:id')
  .get(async (req, res) => {
    const { id } = req.params
    const part = formatPartData(
      await db('parts')
        .select([
          'parts.id',
          'categories.name',
          'cars.make',
          'cars.fuel_type',
          'parts.price',
          'parts.total_inventory',
          'cars.engine_type',
          'cars.fuel_system',
          'parts.image_url'
        ])
        .where({ 'parts.id': id })
        .innerJoin('cars', 'cars.id', '=', 'parts.car_id')
        .innerJoin('categories', 'categories.id', '=', 'parts.category_id')
        .first()
    )
    res.json(part)
  })
  .put(async (req, res) => {
    const { id } = req.params
    const part = await db('parts').where({ id }).first()
    const data = req.body

    res.json(part)
  })

export default router
