const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const app=express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

mongoose.connect("mongodb+srv://dev_saxena_04:qwerty123@cluster0.ga09u.mongodb.net/pfDB",{ useNewUrlParser : true});

const msgSchema = new mongoose.Schema({
  name: String,
  email: String,
  subject: String,
  message: String
});

const Msg = mongoose.model ("msg",msgSchema);


app.get("/",function(req,res) {
  res.sendFile(__dirname +"/home.html");
})

app.get("/contact",function(req,res) {
    res.sendFile(__dirname +"/contact.html");
})

app.post("/",function(req,res) {
  var page = req.body.num1;
  res.sendFile(__dirname + "/" + page + ".html");
})

app.post("/experience",function(req,res) {
  res.redirect("/");
})

app.post("/about",function(req,res) {
  res.redirect("/");
})

app.post("/certification",function(req,res) {
  res.redirect("/");
})

app.post("/contact",function(req,res) {
  if(req.body.num1=="home") {
    res.redirect("/");
  } else {
    const newmsg = new Msg ({
      name: req.body.num1[0],
      email: req.body.num1[1],
      subject: req.body.num1[2],
      message: req.body.num1[3]
    })
    newmsg.save();
    res.redirect("/contact");
  }
})

app.post("/projects",function(req,res) {
  res.redirect("/");
})



app.listen(3000);
