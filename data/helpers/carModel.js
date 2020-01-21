const db = require("../dbConfig.js");

module.exports = {
    get,
    insert,
};

function get() {
    return db("cars");
}

function insert(car) {
    return db("cars")
    .insert(car)
}
