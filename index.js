const express = require('express');

const server = express();

const port = 5000;

server.use(express.json());
const data = require('./data/helpers/carModel.js')

const logger = (req, res, next) => {
    console.log(
    `[${new Date().toISOString()}] ${req.method} to ${req.url} `
  );

  next();

}

server.use(logger);
server.get('/', (req, res) => {
    data.get()
    .then(response => {
        res.status(200).json(response)
    }).catch(error => {
        res.status(500).json({messsage: error})
    })
})


server.post('/', (req, res) => {
    console.log(req.body);
    data.insert(req.body)
    .then(response => {
        res.status(201).json(response)
    }).catch(error => {
        res.status(500).json({message: error})
    })
})



server.listen(port, () => {
    console.log(`server listening on port ${port}`);
})

