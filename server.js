const express = require('express');
const server = express();
const db = require('./data/db-config.js');
server.use(express.json());

server.get('/', (req, res) => {
    db('cars')
        .then(cars => {
            res.status(200).json(cars);
        })
        .catch(error => {
            console.error(error);
            res.status(500).json({message: 'There was an issue getting the cars from the server'});
        })
})

server.post('/', (req, res) => {
    const body = req.body;
    db('cars').insert(body)
        .then(newCar => {
            res.status(201).json(newCar)
        })
        .catch(error => {
            console.error(error);
            res.status(500).json({message: 'There was an issue saving the car to the database'});
        })
})

module.exports = server;