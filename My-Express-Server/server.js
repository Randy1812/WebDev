const express = require('express');
const app = express();

app.get("/", function(req, res) {
  console.log(req);
  res.send("<h1>Hello World!</h1>");
});

app.get("/contact", function(req, res) {
  res.send("Contact Me @ 9567765536");
})

app.get("/about", function(req, res) {
  res.send("Hi, My name is Praneel");
})

app.get("/hobbies", function(req, res) {
  res.send("<ul><li>Coffee</li><li>Coding</li></ul>");
})

app.listen(3000, function() {
  console.log("Server started on Port 3000");
});
