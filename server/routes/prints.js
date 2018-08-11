const express = require('express')
const router = express.Router()
const db = require('../db/prints')

router.get('/', getAllPrints)

function getAllPrints (req, res) {
    db.getPrints()
        .then(prints => {
            res.status(200).json({prints})
        })
        .catch(err => {
            res.status(500).send({message: 'Server error', err})
        })
}