// enum Direction {
//     Up,
//     Down,
//     Left,
//     Right
// }

// function keyControl(keyPressed:Direction):void{
//     console.log(" the key pressed ");
// }


// some common usecase of enums 

import express, { Request, Response } from 'express';

const app = express();


enum ResponseStatus {
    Success = 200,
    NotFound = 404,
    Error = 500
};

app.get("/",(req : Request,res: Response)=>{
    if(!req.query.userId){
        res.status(ResponseStatus.NotFound).json({});
    }
})


app.listen(4000);