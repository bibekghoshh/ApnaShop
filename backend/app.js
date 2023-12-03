const express=require("express");
const app=express();

require("dotenv").config("./config/.env")


process.on('uncaughtException',(error)=>{
    console.error('Uncaught Exception:',error);
    process.exit(1);
})
process.on('unhandledRejection',(error)=>{
    console.error('Unhandled Rejection:', error);
    process.exit(1);
})

app.get("/",(req,res)=>{
    res.send("Hello Developers");
})

app.listen(process.env.PORT,()=>{
    console.log(`server is running at http://localhost:8000`);
})

