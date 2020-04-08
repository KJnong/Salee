const express = require('express')
const cors = require('cors')
const db = require('mongoose')
//importing the salee model
const saleeModel = require('./Models/Sales')

//database connection string
const connectString = 'mongodb+srv://Jethro:JTnong12345@salee-ppqqx.mongodb.net/test?retryWrites=true&w=majority'


const app = express();  //creating the app

//connection to database
db.connect(connectString,{ useNewUrlParser: true } ,()=>{console.log('connected to db');
})

app.use(cors()); //middleware for cors
app.use(express.json()); 



app.post('/salee', async(req, res)=>
{
    // const test = {
    //     name : req.body.name,
    //     content : req.body.content,
    //     created : new Date()
    // }

    // res.send(test)
    const sales = new saleeModel(
        {
            name : req.body.name,
            content : req.body.content,
            created : new Date()
        })
    
    try{
        const savedSalee = await sales.save();
        console.log(savedSalee);
        res.send(savedSalee)
        
    }
    catch(err){
        res.status('404').send(err);
    }
})



app.listen(5000, ()=>{console.log('listening on port 5000');})