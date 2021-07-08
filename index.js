
require('dotenv').config()
const cors = require('cors')
const path = require('path')
const express = require('express')
const server = express()

server.use(express.json())
server.use(cors())
server.use(express.static(path.join(__dirname,'client/')))

console.log(process.env.USERDOMAIN)
const PORT = process.env.PORT || 5000  
server.get('/',(req,res)=>{
    console.log()
    res.sendFile(path.join(__dirname,'client/build','index.html'))
}) 
server.get('/api',(req,res)=>{
    res.json({message:'web43 is working and ready to serve'})
})
server.use((req,res)=>{
    res.status(404).json({message:'sorry could not serve'})
})
server.listen(PORT,()=>{
    console.log(`I am listening at ${PORT}`)
})
