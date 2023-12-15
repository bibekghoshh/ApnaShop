const express=require("express");
const connectDatabase = require("./db/Database");
const app=express();

require("dotenv").config({path:"config/.env"});


process.on('uncaughtException',(error)=>{
    console.error('Uncaught Exception:',error);
    process.exit(1);
})
process.on('unhandledRejection',(error)=>{
    console.error('Unhandled Rejection:', error);
    process.exit(1);
})

connectDatabase();

app.get("/",(req,res)=>{
    res.send("Hello Developers");
})

app.listen(process.env.PORT,()=>{
    console.log(`server is running at http://localhost:${process.env.PORT}`);
})

