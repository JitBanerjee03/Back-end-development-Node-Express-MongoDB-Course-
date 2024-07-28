const express=require('express');
const cookieParser=require('cookie-parser');
const app=express();
const bcrypt=require('bcrypt');
const jwt=require('jsonwebtoken');
app.use(cookieParser());

app.get('/',(req,res)=>{

   let token=jwt.sign({email:"Jit Banerjee"},"secret");
   console.log(token);
   res.cookie("token",token);
   res.send("Done");
}); 

app.get('/hello',(req,res)=>{
   let data=jwt.verify(req.cookies.token,"secret");
   console.log(data);
});

app.listen(3000);