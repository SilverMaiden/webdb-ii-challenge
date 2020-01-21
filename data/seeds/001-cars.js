
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('cars').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('cars').insert([
        {vehicleIdNumber: "WBAVD33516KV29664",
            make: "something",
            model: "something",
            mileage: "something"
      },
       {vehicleIdNumber: "1FMYU02Z96KB97004",
            make: "something",
            model: "something",
            mileage: "something"
      },
       {vehicleIdNumber: "KMHDH4AE1DU602749",
            make: "something",
            model: "something",
            mileage: "something"
      }
      ]);
    });
};
