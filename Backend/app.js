const response =require('express');
const express = require('express');
require("./db/connection")

const app  = express();
const port  =process.env.PORT || 4000

app.use(express.json());

const middleware =(req,res,next)=>{
    next();
} 


app.get("/",(req,res)=>res.send("hello mc"))
app.get("/about",(req,res)=>res.send("hello mc"))
app.get("/land",(req,res)=>res.send("hello mc"))


app.listen(port ,()=>{
     console.log(`Server is running successfully at ${port}`)
})
