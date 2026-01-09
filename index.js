const express=require('express')
const app=express()
const port=5000
app.get('/',(req,res)=>{res.send("hello world")})
app.use('/home',(res,req)=>{res.send("Welcome to home page")})
app.use('/abut',(res,req)=>{res.send("Welcome to about page")})
app.listen(port,()=>{console.log("port is connected")})