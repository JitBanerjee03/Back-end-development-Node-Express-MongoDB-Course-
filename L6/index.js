const express=require('express'); //acquiring the express module
const app=express();  //creating an app
const path=require('path');  // acquiring a path

app.use(express.json());  //to manage data at the backend server
app.use(express.urlencoded({extended:true}));  //to manage data at the back end server

app.set('view engine','ejs');  //setting the ejs 

app.use(express.static(path.join(__dirname,'public')))  //for each request the static files will be searches in the public folder

app.get("/",(req,res)=>{  //setting up the route
   res.render("index");
})

app.get("/profile/jit",(req,res)=>{  //this is static routing 
  res.send("Hello This is jit Banerjee and i am 22 years old !");
})

app.get("/profile/jita",(req,res)=>{  //this is static routing
    res.send("Hello This is jita Banerjee and i am 22 years old !");
})

app.get("/profile/Jitum",(req,res)=>{  //this is static routing
   res.send("Hello this is jitum form isreal");
})

app.get("/profile/:username",(req,res)=>{  //this is dynamic routing
    res.send(req.params.username);
})

app.listen(3000,()=>{  //listing the route
    console.log("Hello World !");
});