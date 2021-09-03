import express from 'express'
import morgan from 'morgan'


const app = express()

import productsRoutes from './routes/products.routes'

app.use(morgan('dev'));

app.get('/', (req, res) => {
    res.json({
        author: 'elena',
        description: "",
        version: "1.0.0"
    })
})

app.use('/products', productsRoutes)

export default app;

