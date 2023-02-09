const mongoose = require('mongoose')
const config = require('config')


const connectDB = async () => {
    try {
        await mongoose.connect(config.get('MONGO_URI'))
    } catch (err) {
        process.exit(1)
    }
}

module.exports = connectDB
