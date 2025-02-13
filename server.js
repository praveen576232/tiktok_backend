const express = require('express');
const schema = require('./Database/database')
const app = new express();
require('dotenv').config()
const mongoose = require('mongoose')
app.use(express.json());
const port =process.env.PORT || 9090;
mongoose.connect(process.env.DATBASE_CONNECTION,{useNewUrlParser:true})


app.use((req,res,next)=>{
res.setHeader("Access-Control-Allow-Origin","*");
res.setHeader("Access-Control-Allow-Headers","*");
next();
})

app.get('/v1/video/get',(req,res)=>{
 
    schema.create(req.body).then(data =>{
        res.send(data);

    }).catch(err =>{
        res.status(500).send(err)
    })
})
app.get('/v1/video/poast',(req,res)=>{
    schema.find().exec().then(data =>{
        res.send(data)
    })
    .catch(err =>{
        res.status(500).send(err)
    })
})
app.listen(port)