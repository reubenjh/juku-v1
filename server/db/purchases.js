const connection = require('./connection')

function getPurchases (testConn) {
    const db = testConn || connection
    return db('purchases')
        .select()
}

function addPurchase (purchase, testConn) {
    const db = testConn || connection
    return db('purchases')
        .insert(purchase)
}

module.exports = {
    getPurchases,
    addPurchase
}