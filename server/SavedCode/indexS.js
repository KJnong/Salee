// const express = require('express')
// const cors = require('cors')
// const db = require('mongoose')

// //import routes
// //const authRoute = require('./Routes/auth')

// //database connection string
// const connectString = 'mongodb+srv://<Jethro>:<JTnong234567>@salee-fa4uq.mongodb.net/test?retryWrites=true&w=majority'


// const app = express();  //creating the app

// //connection to database
// db.connect('localhost/salee' ,()=>{console.log('connected to db');
// })

// app.use(cors()); //middleware for cors
// app.use(express.json()); 

// //importing the salee model
// const saleeModel = require('./Models/Sales')

// app.post('/salee', async(req, res)=>
// {
//     const sales = new saleeModel(
//         {
//             name : req.body.name,
//             content : req.body.content,
//             created : new Date()
//         })
    
//     try{
//         const savedSalee = await sales.save();
//         console.log(savedSalee);
        
//     }
//     catch(err){
//         res.status('404').send(err);
//     }
// })


// //using Monk
// // function IsValidSale(sale)
// // {
// //     return sale.name && sale.name.toString().trim() !== "" &&
// //     sale.content && sale.content.toString().trim() !== ""
// // }

// // app.post('/salee', (req, res)=>
// // {
// //     if (IsValidSale(req.body))
// //     {
// //         //insert into database
// //         const sale =
// //         {
// //             name : req.body.name.toString(),
// //             content : req.body.content.toString(),
// //             created : new Date()
// //         };
// //         sales
// //             .insert(sale)
// //             .then(res.status(200))
// //     }
// //     else
// //     {
// //         res.status(422)
// //         res.json({
// //             message: "Both Name and Content are required"
// //         })
// //     }
    
// // })

// // app.get('/salee', (req, res)=>
// // {
// //     sales
// //         .find()
// //         .then(sales=>
// //             {
// //                 res.json(sales)
// //             })
// // })

// app.listen(5000, ()=>
// {
    
//     console.log('listening on port 5000');
    
// })