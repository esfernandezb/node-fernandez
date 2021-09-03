import express from 'express'
import morgan from 'morgan'


const app = express()

import productsRoutes from './routes/products.routes'
import authRoutes from './routes/auth.routes'

app.use(express.json())
app.use(morgan('dev'));


app.get('/', (req, res) => {
    res.json({
        author: 'elena',
        description: "",
        version: "1.0.0"
    })
})

app.use('/api/products', productsRoutes)
app.use('/api/auth', authRoutes);

export default app;

