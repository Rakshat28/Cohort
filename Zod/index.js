const express = require('express');
const zod = require('zod');
const app = express();
const PORT = 3000;

app.use(express.json()); 

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
            "msg":"wrong kidney info"
        })
    }
    else{
        next();
    }
};

//to verify the user input we will create a schema using Zod

const schema = zod.array(zod.number());//here it is an array of numbers 

app.post("/health-check",(req,res)=>{
    const kidneys= req.body.kidneys;
    const response = schema.safeParse(kidneys);
    // this will have many keys including success, which is either true or false
    //true when the user input matches the schema
    //false when not
    if(!response.success){
        res.status(411).json({
            "msg":"invalid input"
        })
    }
    else{
        res.send({
            response
        })
    }
});

app.get("/health-checkup",userMiddleware,kidneyMiddleware,(req,res)=>{
    res.send("Hellow ji apki health changa si");
});

app.get("/user-check",userMiddleware,(req,res)=>{
    res.send("sahi user hai bhai");
});

app.get("/kidney-check",kidneyMiddleware,(req,res)=>{
    res.send("sahi kidney hai bhai");
});


app.listen(3000);