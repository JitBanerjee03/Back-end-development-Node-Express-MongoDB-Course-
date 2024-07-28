const mongoose=require('mongoose');

mongoose.connect(`mongodb://127.0.0.1:27017/mongopractice`);

const userSchema=mongoose.Schema({  //defining the schema
    name : String,
    userName : String,
    email : String
});

module.exports=mongoose.model("user",userSchema);  //exporting the model by first reacting the model and the model name will be users