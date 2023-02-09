const mongoose = require('mongoose')

const MetersSchema = new mongoose.Schema({
    personal_account: {type: String},
    locality: {type: String, required: true},
    street: {type: String, required: true},
    house_number: {type: String, required: true},
    building: {type: String},
    apartment: {type: String, required: true},
    cold_water: {type: String, required: true},
    hot_water: {type: String, required: true}
}, {timestamps: true})

module.exports = mongoose.model('Meters', MetersSchema)
