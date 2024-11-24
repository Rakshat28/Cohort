import {Client} from 'pg'
require('dotenv').config({path : '../.env'});

const client = new Client({
   connectionString : process.env.POSTGRE_CONNECTION_STRING
})




async function insertData(username:string,email:string,password:string){
   try{
       await client.connect();
       const insertQuery = "INSERT INTO users(username, email, password) VALUES ($1,$2,$3);"
       const values = [username,email,password];
       const res = await client.query(insertQuery,values);
       console.log('insertion done',res);
   }catch(e){
       console.log("some error",e);
   }finally{
       await client.end();
   }
}

// createUserTable();    already created using this command so just commenting it out
insertData("dutta","dutta@gmail.com","12312");


// the way that we wrote the code is incorrect as we did not verify the user input (its schema and definition)