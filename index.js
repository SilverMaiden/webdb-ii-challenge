const express = require('express');

const server = require('./server');

const port = 5000;


server.use(express.json());

const logger = (req, res, next) => {
    console.log(
    `[${new Date().toISOString()}] ${req.method} to ${req.url} `
  );

  next();

}

server.use(logger);


server.listen(port, () => {
    console.log(`server listening on port ${port}`);
})

