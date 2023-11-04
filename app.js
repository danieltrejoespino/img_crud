'use strict'
const express = require('express')
const app=express()
const PORT=process.env.PORT || 3007;

const routers= require('./routes/project_route')

app.use('/api',routers)

app.use((req,res,next)=>{
  const clientIp = req.socket.remoteAddress; 
  console.log(`La IP del cliente que se conectó es: ${clientIp}`);
  next();
})


module.exports={
  app,
  PORT
};

