const { urlencoded } = require('express');
const mongoose=require('mongoose');
let Schema=mongoose.Schema;

const festivalSchema=new Schema({
    season:{
        type:String,

    },
    name:{
        type:String,
    },
    image:{
        type:String,
    },
    bio:{
        type:String,
    }
})

const Festival=mongoose.model("Festival",festivalSchema);
module.exports=Festival;