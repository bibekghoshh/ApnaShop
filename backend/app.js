const express=require("express");
const ErrorHandler=require('./middleware/error');
const connectDatabase = require("./db/Database");
const app=express();
const cookieParser=require('cookie-parser');
const bodyParser=require('body-parser');
const cors=require('cors');

app.use(cors({origin:['https://localhost:3000'],credentials:true}));
app.use(express.json())
app.use(cookieParser())
app.use(express.urlencoded({extended:true,limit:"50mb"}));

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
app.use(ErrorHandler);
