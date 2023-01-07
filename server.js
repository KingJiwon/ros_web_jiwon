// const http = require("http");
// const server = http.createServer();
// const port = 8080;
// // var nic_ip = "ros-web.kro.kr";
// var nic_ip = "222.105.250.60";
// server.listen(port, nic_ip);

const express = require("express");
const app = express();
const path = require("path");

app.listen(7070, function () {
  console.log("listening on 7070");
});

app.use(express.static(path.join(__dirname, "/ros_web/build")));

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "/ros_web/build/index.html"));
});

app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "/ros_web/build/index.html"));
});
