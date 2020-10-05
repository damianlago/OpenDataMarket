const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')

const Category = require('../models/category.model')

// Endpoints
router.get('/categories', (req, res) => {

    Category.find()
        .then(response => res.json(response))
        .catch(err => res.status(500).json(err))
})

module.exports = router


fetch('http://18.157.253.218:3000/api/v1/retail/categories')
    .then(res => res.json())
    .then(response => {
        response.forEach(elm => elm.name)
    }
