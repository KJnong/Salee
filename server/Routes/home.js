const router = require('express').Router();
//importing the salee model
const saleeModel = require('../Models/Sales')
const TokenVerify = require('../Validation/TokenVerify')

router.get('/salee', TokenVerify, async (req, res) => {
    const SaleObject = await saleeModel.find();
    res.send(SaleObject);
})

module.exports = router;