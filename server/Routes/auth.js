const router = require('express').Router();
const userModel = require('../Models/User')
const {RegiserValidation} = require("../Validation/Validation")

router.post('/register', async (req , res)=>
{    
    const {error} = RegiserValidation(req.body);
    res.send(error.details[0].message)

    if (error) return res.status(404).send(error.details[0].message)
    
   
    const user = new userModel(
        {
            name : req.body.name,
            lastName : req.body.lastName,
            email : req.body.email,
            password : req.body.password
        })

    try
    {
        const userRes = await user.save();
        res.send(userRes)
        
    }
    catch(err)
    {
        res.status('404').send(err);
    }
    
})

module.exports = router;