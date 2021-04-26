const express = require('express')
const router = require('./routes')

const app = express()
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use('/api/',router)
app.all('*', (req, res)=>{
    res.status(404).send({message: 'endpoint not found'})
})

app.listen(8080, ()=>{
    console.log('bienvenue a mon server')
})



