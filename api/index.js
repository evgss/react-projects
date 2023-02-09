const express = require('express')
const config = require('config')
const path = require("path");
const connectDB = require("./utils/db");
const newsRoute = require('./routes/newses')
const metersRoute = require('./routes/meters')
const authRoute = require('./routes/auth')
const cors = require('cors')

const app = express()
app.use(express.json())
app.use('/images', express.static(path.join(__dirname, '/images')))

connectDB().then(() => console.log('Database connected'))

app.use(cors())
app.use('/api/news', newsRoute)
app.use('/api/meters', metersRoute)
app.use('/api/auth', authRoute)

const dirname = path.resolve()
if (process.env.NODE_ENV === 'production') {
    app.use('/', express.static(path.join(dirname, 'client', 'build')))

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(dirname, 'client', 'build', 'index.html'))
    })
}

const PORT = config.get('port') || 5000
app.listen(PORT, () => console.log(`Server is on ${PORT}`))
