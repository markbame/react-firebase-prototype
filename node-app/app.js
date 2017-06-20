const express = require('express')
const app = express()
const http = require('http')
const server = http.createServer(app)

var FirebaseTokenGenerator = require("firebase-token-generator");
var tokenGenerator = new FirebaseTokenGenerator("alx213ddsakkwqioml-basda1kf");
var token = tokenGenerator.createToken({ uid: "1", some: "arbitrary", data: "here" });

app.get('/', function(req, res, next) {
  res.status(200)
  res.send("please see console logs: "+ token)
})

server.listen(3001, '0.0.0.0', function (err, result) {
  if (err)
    return console.log(err)

  console.log('Listening at port 3001')
})
