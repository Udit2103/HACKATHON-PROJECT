var express = require("express")
var body_parser = require("body-parser")
var app=express()
app.use("body_parser",urlencoded({extended:false}))
app.use(body_parser.json)
app.get("/",(req,res)=>{
    res.sendFile(__dirname+"/strt.html")
})
app.get("/vc",(req,res)=>{
    res.sendFile(__dirname+"/vc.html")
})
app.get("/comp",(req,res)=>{
    res.sendFile(__dirname+"/comp.html")
})

app.get("/rec",(req,res)=>{
    res.sendFile(__dirname+"/rec.html")
})
app.listen(3000)