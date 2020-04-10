const express = require('express')
const cors = require('cors')
const db = require('mongoose')
require('dotenv').config();
const authRouter = require('./Routes/auth')
//importing the salee model
const saleeModel = require('./Models/Sales')

//database connection string
const password = process.env.MongoDB_Password;
const connectString = `mongodb+srv://Jethro:${password}@salee-ppqqx.mongodb.net/test?retryWrites=true&w=majority`


const app = express();  //creating the app

//connection to database
db.connect(connectString,{ useNewUrlParser: true } ,()=>{console.log('connected to db');
})

app.use(cors()); //middleware for cors
app.use(express.json()); 

app.use('/user', authRouter );

app.get('/salee', async (req, res)=>{
    const SaleObject = await saleeModel.find();
    
    res.send(SaleObject);
})

app.post('/salee', async(req, res)=>
{

    const sales = new saleeModel(
        {
            name : req.body.name,
            content : req.body.content,
            created : new Date()
        })
    
    try{
        await sales.save();
        const SaleObject = await saleeModel.find();
    
        res.send(SaleObject);
        
    }
    catch(err){
        res.status('404').send(err);
    }
})





app.listen(5000, ()=>{console.log('listening on port 5000');})