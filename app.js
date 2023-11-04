'use strict'
const express = require('express')
const app=express()
const PORT=process.env.PORT || 3007;

const routers= require('./routes/project_route')

app.use('/api',routers)

app.use((req,res,next)=>{

  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
  const clientIp = req.socket.remoteAddress; 
  console.log(`La IP del cliente que se conectó es: ${clientIp}`);
  next();
})


module.exports={
  app,
  PORT
};

