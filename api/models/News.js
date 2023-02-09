const mongoose = require('mongoose')

const NewsSchema = new mongoose.Schema({
    title: {type: String},
    text: {type: Array}
}, {timestamps: true})

module.exports = mongoose.model('News', NewsSchema)

