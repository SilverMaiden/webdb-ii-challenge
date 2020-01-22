const express = require('express');
const carRoutes = require('./api/carRoutes');
const server = express();

server.use(express.json());

server.use('/cars', carRoutes);

module.exports = server;
