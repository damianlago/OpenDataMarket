const mongoose = require('mongoose')
const Schema = mongoose.Schema

const categorySchema = new Schema({
    supermarket: String,
    category: String,
    url: String
}, {
    timestamps: true
})

const Category = mongoose.model('category', categorySchema)
module.exports = Category