// Update with your config settings.

module.exports = {

  development: {
    // DBMS driver
    client: 'sqlite3',
    // LOCATION of our DB
    connection: {
      filename: './data/car-dealer.db3'
    },
    useNullAsDefault: true,
    migrations: {
        directory: './data/migrations'
    },
    seeds: {
        directory: './data/seeds'
    }
  }
};
