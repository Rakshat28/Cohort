 import {Client} from 'pg'
 require('dotenv').config({path : '../.env'});
 
 const client = new Client({
    connectionString : process.env.POSTGRE_CONNECTION_STRING
 })


async function createUserTable(){
    await client.connect();
    const result = await client.query(`
        CREATE TABLE users(
            id SERIAL PRIMARY KEY,
            username VARCHAR(50) UNIQUE NOT NULL,
            email VARCHAR(255) NOT NULL,
            password VARCHAR(255) NOT NULL,
            created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
            );
    `)
    console.log(result);
}

async function insertData(){
    try{
        await client.connect();
        const insertQuery = "INSERT INTO users(username, email, password) VALUES ('pavan','pavan07ps@gmail.com','123456');"
        const res = await client.query(insertQuery);
        console.log('insertion done',res);
    }catch(e){
        console.log("some error",e);
    }finally{
        await client.end();
    }
}

// createUserTable();    already created using this command so just commenting it out
insertData();


// the way that we wrote the code is incorrect as we did not verify the user input (its schema and definition)