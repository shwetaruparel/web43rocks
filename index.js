
require('dotenv').config()
const cors = require('cors')
const path = require('path')
const express = require('express')
const server = express()

server.use(express.json())
server.use(cors())
server.use(express.static(path.join(__dirname,'client/build')))

console.log(process.env.USERDOMAIN)
const PORT = process.env.PORT || 5000  
server.get('/',(req,res)=>{
    console.log("hello")
    res.sendFile(path.join(__dirname,'client/build','index.html'))
}) 
server.get('/api',(req,res)=>{
    res.json({message:'web43 is working and ready to serve'})
})
server.listen(PORT,()=>{
    console.log(`I am listening at ${PORT}`)
})
