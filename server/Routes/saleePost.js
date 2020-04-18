const router = require('express').Router();
const saleeModel = require('../Models/Sales')

router.post('/', async (req, res) => {

    const sales = new saleeModel(
        {
            name: req.body.name,
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