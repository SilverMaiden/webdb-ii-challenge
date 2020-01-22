const db = require("../dbConfig.js");

module.exports = {
    get,
    insert,
};

function get(id) {
    let query = db("cars as c");
    if (id) {
        return db('cars')
        .where('cars.id' === id);
    } else {
        return db('cars');
    }
}

function insert(car) {
    return db('cars')
    .insert(car)
}

