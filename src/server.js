const express = require('express')
const router = require('./routes')

const app = express()
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use('/api/',router)

app.listen(8080, ()=>{
    console.log('bienvenue a mon server')
})



