
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('cars').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('cars').insert([
        {   id: 1,
            VIN: "WBAVD33516KV29664",
            make: "something",
            model: "something",
            mileage: 78978978.7789797
      },
       {    id: 2,
            VIN: "1FMYU02Z96KB97004",
            make: "something",
            model: "something",
            mileage: 45664564.564654
      },
       {    id: 3,
            VIN: "KMHDH4AE1DU602749",
            make: "something",
            model: "something",
            mileage: 12313213.1231312
      }
      ]);
    });
};
