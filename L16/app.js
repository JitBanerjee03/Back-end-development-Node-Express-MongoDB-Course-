const express=require('express');
const app=express();

const userModel=require('./models/user');
const postModel=require('./models/post');

app.get('/',(req,res)=>{
   res.send("Hello");
});

app.get('/create',async (req,res)=>{
    
    let user=await userModel.create({
       userName:"Jit Banerjee",
       email:"jeet030801@gmail.com",
       age:23,

    });

    res.send(user);
});

app.get('/create/post',async (req,res)=>{
    
    let post=await postModel.create({
        postData:"Hello this is jeet banerjee and i am 22 yeras old boy from Kolkata",
        user:"66a76374f54e286459b933ca"
    });

    let user=await userModel.findOne({_id:"66a76374f54e286459b933ca"});
    
    user.post.push(post._id);

    await user.save();

    res.send({user,post});
});

app.listen(3000);