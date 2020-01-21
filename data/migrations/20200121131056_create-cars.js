
exports.up = function(knex, Promise) {

    return knex.schema.createTable('cars', tbl => {
        // primary key called VIN, required, not nullable, unique
        tbl.text('vehicleIdNumber').notNullable().unique();
        tbl.text('make').notNullable();
        tbl.text('model').notNullable();
        tbl.text('mileage').notNullable();
        tbl.text('transmissionType');
        tbl.text('status');
    })

};

exports.down = function(knex) {
    //drops the entire table
    return knex.scheme.dropTableIfExists('cars');

};
