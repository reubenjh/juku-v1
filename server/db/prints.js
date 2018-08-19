const connection = require('./connection')

function getPrints (testConn) {
    const db = testConn || connection
    return db('prints').select()
}

module.exports = {
    getPrints
}