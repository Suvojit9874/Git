const express=require('express');
const app= express();
require('dotenv').config();
const PORT = process.env.PORT;
const dbConnect= require('./Database');
const router=require('./routes/route')
app.use(express.json())
app.use('/api/v1',router)
dbConnect()

app.get('/',(req,res)=>{
    res.send("Server is live")
})
app.listen(PORT,()=>{
    console.log("server started")
})