require('dotenv').config()
const express = require('express')
const server = express()
const PORT = 5000   // process.env.PORT
server.get('/api',(req,res)=>{
    res.json({message:'web43 is working and ready to serve'})
})
server.listen(5000,()=>{
    console.log(`I am listening at ${PORT}`)
})