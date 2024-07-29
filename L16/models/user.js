const mongoose=require('mongoose');
const post = require('./post');

mongoose.connect('mongodb://127.0.0.1:27017/AssociationModel');

const userSchema=mongoose.Schema({
    userName:String,
    email:String,
    age:Number,
    post:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'post'
    }]
})

module.exports=mongoose.model('user',userSchema);