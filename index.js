var express = require("express")
var app =express();

require("dotenv").config()

console.log(process.env.port);

var port =process.env.port || 3008

app.get('/',(req,res) => {
  res.send("this is root api")
})

app.listen(port,() => {

  console.log("server has been started");
})