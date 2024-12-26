const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const port = 5500
const DataModel = require('./model/index.js');

app.use(cors({
    origin: (origin, callback) => {
        callback(null, origin || '*'); // Allow all origins
    },
    methods: ['GET', 'POST'],
    credentials: true,
}));

app.use(express.json());

mongoose.connect('mongodb+srv://kishanurankar:kishanurankar@cluster0.qqlsq.mongodb.net/dummydatabase?retryWrites=true&w=majority&appName=Cluster0').then(()=>{
    console.log('Connected to MongoDB');
})

app.post('/employees', async(req,res)=>{
    console.log(req.body)
    const {name, age} = req.body;
    if(name && age){
        const data = new DataModel({name, age});
        await data.save();
        res.json(data);
    }else{
        res.send('Invalid data');
    }
})

app.get('/employees', async(req, res)=>{
    try{
        const data = await DataModel.find();
        res.json(data);
    }catch(err){
        res.send("Server err");
    }
})

app.get('/employees/:id', async(req, res)=>{
    console.log(req.params.id)
    try{
        const data = await DataModel.findById(req.params.id);
        if(!data) return res.status(404).send('Data not found');
        res.json(data);
    }catch(err){
        res.send("Server err");
    }
})

app.listen(port, (err)=>{
    if(err) throw err;
    console.log(`Server is running on port http://localhost:${port}`);
})