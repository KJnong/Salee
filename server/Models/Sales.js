const mongoose = require('mongoose');

const saleeSchema = mongoose.Schema({
    name : {
        type: String,
        required: true,
        min:8
    },
    content:{
        type: String,
        required: true,
        min:10,
        max:50
    },
    created:{
        type:Date,
    }

})

module.exports = mongoose.model("sales", saleeSchema)