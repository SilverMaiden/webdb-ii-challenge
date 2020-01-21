exports.up = function(knex, Promise) {

    return knex.schema.alterTable('cars', tbl => {
        // primary key called VIN, required, not nullable, unique
        tbl.increments();
    }).then((response) => {

    }).catch((err) => {

    })

};

exports.down = function(knex, Promise) {
    //drops the entire table
    return knex.scheme.dropTableIfExists('cars');

};
