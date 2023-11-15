import express from 'express'
import cors from 'cors'
import UserRouter from './modules/users/user.router.js'
import PartsRouter from './modules/parts/parts.router.js'
import OrdersRouter from './modules/orders/orders.router.js'
import MerchantsRouter from './modules/merchants/merchants.router.js'

const app = express()
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(cors())
app.use(express.static('public'))
app.use(UserRouter)
app.use(PartsRouter)
app.use(OrdersRouter)
app.use(MerchantsRouter)

app.get('/', (req, res) => {
  res.json({
    running: true
  })
})

app.listen(80, () => {
  console.log(`Server Running`)
})
