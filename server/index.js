const express = require('express')
const cors = require('cors')
const monk = require('monk')


const app = express();  //creating the app

//connection to database
const db = monk(process.env.MONGO_URI || 'localhost/salee'); //creates the database if doesnt exist
const sales = db.get("sales") 

app.use(cors()); //middleware for cors
app.use(express.json()); 


app.get('/', (req, res)=>
{
    res.json({
        Name:"Jethro",
        Age:26
    })
})

function IsValidSale(sale)
{
    return sale.name && sale.name.toString().trim() !== "" &&
    sale.content && sale.content.toString().trim() !== ""
}

app.post('/salee', (req, res)=>
{
    if (IsValidSale(req.body))
    {
        //insert into database
        const sale =
        {
            name : req.body.name.toString(),
            content : req.body.content.toString(),
            created : new Date()
        };
        sales
            .insert(sale)
            .then(res.status(200))
    }
    else
    {
        res.status(422)
        res.json({
            message: "Both Name and Content are required"
        })
    }
    
})

app.get('/salee', (req, res)=>
{
    sales
        .find()
        .then(sales=>
            {
                res.json(sales)
            })
})

app.listen(5000, ()=>
{
    
    console.log('listening on port 5000');
    
})