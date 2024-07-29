const express=require('express');  //requiring the express package
const app=express();
const cookieParser = require('cookie-parser');  //requiring the cookie parser package
const bcrypt=require('bcrypt');  //requiring the bcrypt package 
const jwt=require('jsonwebtoken');

const userModel=require('./models/user');
const postModel=require('./models/post');

app.set('view engine','ejs');
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());

app.get('/',(req,res)=>{
   res.render('index');
});

app.post('/register',async (req,res)=>{
    //username name age email password
  let{email,name,username,age,password}=req.body;

  let user=await userModel.findOne({email});

  if(user) return res.status(500).send("User already registered");

  bcrypt.genSalt(10,(err,salt)=>{
     bcrypt.hash(password,salt,async(err,hash)=>{
        let user=await userModel.create({
            name,
            age,
            email,
            username,
            password:hash
        });

        let token=jwt.sign({email:email,user:user._id},"shhhhhh");
        res.cookie("token",token);
        res.send("Registed !");
     });
  })
});

app.get('/login',(req,res)=>{
    res.render('login');
});

app.post('/login',async (req,res)=>{
    //username name age email password
  let{email,password}=req.body;

  let user=await userModel.findOne({email});

  if(!user) return res.status(500).send("Something went wrong !");

  bcrypt.compare(password,user.password,(err,result)=>{
     
    if(result) res.status(200).send("You can login");
     res.redirect('/login');
    });
});

app.get('/logout',(req,res)=>{
    res.cookie("token","");
    res.redirect('/login');
});

app.listen(3000);