const { response } = require('express')
const filmes = require('../model/filmes.json')

const getAll = (req, res) => {
    console.log(req.url)
    res.status(200).send(filmes)
}

module.exports = { 
    getAll 
}
