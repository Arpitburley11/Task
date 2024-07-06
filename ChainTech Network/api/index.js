import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import authRoute from './routes/authRoute.js';

const app = express();
dotenv.config()

//Middlewares
const corsOptions ={
    origin:'http://localhost:3000', 
    credentials:true,        
    optionSuccessStatus:200
}
app.use(cors(corsOptions));
app.use(cookieParser())
app.use(express.urlencoded({extended:false}))
app.use(express.json()) 

app.use('/', authRoute)


// MongoDB database connection
mongoose.connect(process.env.MongoURL)
.then(()=>{
    console.log('Database connected')
    app.listen(process.env.PORT, ()=>{
        console.log(`Server running on ${'http://localhost:8000'}`);
    })
})  
.catch((error)=>{
    console.log(error)
})