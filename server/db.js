import mongoose from "mongoose";
const conn = () => {
    mongoose.connect(process.env.DB_URI,{
        dbName :"chat_app",
        useNewUrlParser:true,
        useUnifiedTopology:true, 
    }).then(()=>{
        console.log("Connected to the DB Succesully")
    }).catch((err)=>{
        console.log(`DB connection err: ${err}`);
    })
}
export default conn;