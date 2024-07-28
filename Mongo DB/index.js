const express=require('express');
const app=express();

const userModel=require('./usermodel');  //importing the userModel that has been exported from the usermodel.js file

app.get('/',(req,res)=>{
   res.send("Hello there");
});

app.get('/create',async (req,res)=>{
  
    let createdUser=await userModel.create({  //create operation 
    name:"Jeet Banerjee",
    userName:"abhinav67",
    email:"abhinav030801@gmail.com"
  })

  res.send(createdUser);
})

app.get('/update',async (req,res)=>{  //update operation
   let updatedUser=await userModel.findOneAndUpdate({userName:"Banujje_Jit"},{name:"Jeet Banerjee"},{new:true});
   res.send(updatedUser);
});

app.get('/read',async(req,res)=>{  //read operation
   let users=await userModel.findOne({name:"Jeet Banerjee"});
   res.send(users);
})

app.get('/delete',async (req,res)=>{  //delete operation
  let deletedUser=await userModel.findOneAndDelete({name:"Jeet Banerjee"});
  res.send(`Deleted user = ${deletedUser}`);
});
app.listen(3000);