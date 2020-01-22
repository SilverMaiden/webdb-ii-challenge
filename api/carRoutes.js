const express = require('express');
//const data = require('../data/dbConfig');
const data = require('../data/helpers/carModel');
const router = express.Router();

router.get('/', (req, res) => {
 /*
   data('cars')
   .then(response => {
       res.status(200).json(response)
   }).catch(error => {
       res.status(500).json({message: "Failed to get cars data."})
   }) */
   data.get()
    .then(response => {
        res.status(200).json(response)
    }).catch(error => {
        res.status(500).json({messsage: error})
    })

})

router.get('/:id', (req, res) => {
   data.get(req.params.id)
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
    /*
    data('cars')
   .insert(req.body)
   .then(response => {
       res.status(201).json(response)
   }).catch(error => {
       res.status(500).json({message: "Failed to add new car."})
   })*/

})


module.exports = router;

