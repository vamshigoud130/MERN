import exp from 'express';
import { userApp } from "./API/userapi.js"
import { productApp } from "./API/productapi.js"
import { connect } from 'mongoose';
import CookieParser from 'cookie-parser';
const app = exp();
const port=3000;
//connect to database
async function dbconnect(){
     try{
     let db= await connect('mongodb://localhost:27017/anuragdb')
     console.log("database connected successfully")
     app.listen(port,()=>console.log("Server running on port 4000..."));
     }catch(err){
          console.log("error in DB connection",err)
     }
     //.then(()=>console.log("DB connected"))
     //.catch((err)=>console.log("error in DB connection",err))
}
dbconnect();
//body parser middleware
app.use(exp.json())

app.use(CookieParser())
//if path starts with /user-api, forward the request to userApp
app.use('/user-api',userApp)

//app.listen(port,()=>console.log("Server running on port 4000..."));
app.use('/product-api',productApp)


//error handling middleware
app.use((err,req,res,next)=>{
     res.status(500).json({message:"error occured",error:err.message})
})
