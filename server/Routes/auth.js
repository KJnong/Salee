const router = require('express').Router();
const userModel = require('../Models/User')
const {RegiserValidation} = require("../Validation/Validation")
const bcrypt = require('bcryptjs')

router.post('/register', async (req , res)=>
{    
    //valadating req.body
    const {error} = await RegiserValidation(req.body);

    if (error) return res.status(404).send(error.details[0].message)
    
    //checking if email already exist
    const emailExist = await userModel.findOne({email : req.body.email})

    if (emailExist) {
        return res.status(401).send("Email already exist")
    }

    //hash password
    const salt = await bcrypt.genSalt()
    const hashedPassword = await bcrypt.hash(req.body.password, salt)


    const user = new userModel(
        {
            name : req.body.name,
            lastName : req.body.lastName,
            email : req.body.email,
            password : hashedPassword
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