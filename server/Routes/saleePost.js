const router = require('express').Router();
const saleeModel = require('../Models/Sales')
const jwt = require('jsonwebtoken');


router.post('/', async (req, res) => {

    const authHeader = req.header('Authorization');
    const token = authHeader && authHeader.split(' ')[1];

    const {name} = jwt.verify(token, process.env.Token_Key);
    
    const sales = new saleeModel(
        {
            name: name,
            content: req.body.content,
            created: new Date()
        })

    try {
        await sales.save();
        const SaleObject = await saleeModel.find();

        res.send(SaleObject);

    }
    catch (err) {
        res.status('404').send(err);
    }
})

module.exports = router;