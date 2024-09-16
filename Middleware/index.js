const express = require("express");
const app = express();
const PORT = 3000;

//if we know that a middleware will be required to be called in every route , then we will put it in 
// app.use

app.use(express.json()); // only here we will call the middleware using () warna elsewhere we will just write the name of the middleware
// because express.json in itself returns a function
// comes before all the routes
function userMiddleware(req,res,next){
    const username = req.headers.username;
    const password = req.headers.password;
    if(username!="harkirat" && password!="pass"){
        res.status(403).json({
            "msg":"something went wrong with your user input"
        });
    }
    else{
        next();
    }
};

function kidneyMiddleware(req,res,next){
    const kidneyId=req.query.kidneyId;
    if(kidneyId!=1 && kidneyId!=2){
        res.status(403).json({
            "msg":"wrong kidney ki provided info"
        })
    }
    else{
        next();
    }
};

app.get("/health-checkup",userMiddleware,kidneyMiddleware,(req,res)=>{
    res.send("Hellow ji apki health changa si");
});

app.get("/user-check",userMiddleware,(req,res)=>{
    res.send("sahi user hai bhai");
});

app.get("/kidney-check",kidneyMiddleware,(req,res)=>{
    res.send("sahi kidney hai bhai");
});

//global catches are written at the end , so that if any exception occurs then the flow reaches to the global catch middleware
//Without global error handling, if an error occurs in one part of the system that isn’t caught, it could crash the entire app or leave it in an unstable state.

app.use((err,req,res,next)=>{
    res.status(500).send("something went wrong with out server");
})

app.listen(PORT);