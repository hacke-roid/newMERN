const mongoose = require('mongoose')

const dataSchema = mongoose.Schema({
    name: String,
    age: Number,
})

const DataModel = mongoose.model('employees', dataSchema)

module.exports = DataModel;