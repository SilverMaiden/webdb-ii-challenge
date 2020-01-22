const express = require('express');
const data = require('../data/helpers/carModel.js')
const router = express.Router();

router.get('/', (req, res) => {
    data.get()
    .then(response => {
        res.status(200).json(response)
    }).catch(error => {
        res.status(500).json({messsage: error})
    })
})


router.post('/', (req, res) => {
    console.log(req.body);
    data.insert(req.body)
    .then(response => {
        res.status(201).json(response)
    }).catch(error => {
        res.status(500).json({message: error})
    })
})


module.exports = router;

