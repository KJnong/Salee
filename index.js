const express = require('express')
const cors = require('cors')
const db = require('mongoose')
require('dotenv').config();
const authRouter = require('./server/Routes/auth')
const homeRouter = require('./server/Routes/home')
const postSaleeRouter = require('./server/Routes/saleePost')
const path = require('path')

//database connection string
// localhost database 'mongodb://localhost:/myproject'
const password = process.env.MongoDB_Password;
const connectString = `mongodb+srv://Jethro:${password}@salee-ppqqx.mongodb.net/Salee?retryWrites=true&w=majority`

const app = express();  //creating the app

//connection to database
db.connect(connectString, { useNewUrlParser: true }, () => {
    console.log('connected to db');
})

// app.use(express.static(path.join(__dirname,'client/build')))

app.use(cors()); //middleware for cors
app.use('/api/uploads' ,express.static('uploads'))
app.use(express.json());

//reg and login route
app.use('/api/user', authRouter);

//posting salee route
app.use('/api/salee', postSaleeRouter)

//home route
app.use('/api', homeRouter )

// app.get('*', (req, res) => {
//     // res.sendFile(path.join(`${__dirname}/client_react/build/index.html`));
//     res.send('Not found');
// });



app.listen(5000, () => { console.log('listening on port 5000'); })