const { request } = require('express')
const express = require('express')
const router = express.Router()


router.get('/user', (req, res)=>{
    res.json({message: 'bienvenue dans la galere'})
})

module.exports = router