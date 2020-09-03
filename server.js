const express = require('express');
const schema = require('./Database/database')
const app = new express();
const mongoose = require('mongoose')
app.use(express.json());
const port =process.env.PORT || 9090;
mongoose.connect('mongodb+srv://praveend:praveend123@tiktokclone.halcg.mongodb.net/tiktokdatabase?retryWrites=true&w=majority',{useNewUrlParser:true})


app.use((req,res,next)=>{
res.setHeader("Access-Control-Allow-Origin","*");
res.setHeader("Access-Control-Allow-Headers","*")
})

app.get('/v1/video/get',(req,res)=>{
 
    schema.create(req.body).then(data =>{
        res.send(data);

    }).catch(err =>{
        res.status(500).send(err)
    })
})
app.post('/v1/video/poast',(req,res)=>{
    schema.find().exec().then(data =>{
        res.send(data)
    })
    .catch(err =>{
        res.status(500).send(err)
    })
})
app.listen(port)