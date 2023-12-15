const mongoose=require('mongoose');


const connectDatabase=()=>{
    mongoose.connect(process.env.MONGODB_URL);
    
    const db=mongoose.connection;
    db.on('error',console.error.bind(console,'MongoDb connection error'));
    db.once('open',()=>{console.log("Connected to the database");})
}

module.exports=connectDatabase;