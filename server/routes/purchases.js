const express = require('express')
const router = express.Router()
const db = require('../db/purchases')

router.get('/', getAllPurchases)

function getAllPurchases (req, res) {
    db.getPurchases()
        .then(purchases => res.status(200).json({purchases}))
        .catch(err => res.status(500).send({message: 'Server error', err}))
}

router.post('/', addNewPurchase)

function addNewPurchase (req, res) { // note - purchase ojjects should mirror print objects in db
    const cart = req.body.cart
    const {email_address, postal_address} = req.body.contact
    new Promise((resolve, reject) => {
        cart.forEach(print => {
            const {print_id, quantity} = print
            const price = print.price * quantity
            const purchase = {print_id, quantity, email_address, postal_address, price}
            db.addPurchase(purchase)
                .then((inserts) => {
                    // decrease quantity
                })
                .catch(err => reject(err))
        })
    })
    .then(() => res.sendStatus(200))
    .catch(err => res.status(500).send({message: 'Server error', err}))
}

module.exports = router

// testing
const fakeCart = [{print_id: 1, quantity: 1},{print_id: 2, quantity: 3},{print_id: 3, quantity: 1}]
const contact = {email_address: 'asasd', postal_address: 'adsadas'}