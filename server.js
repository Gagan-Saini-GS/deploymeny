require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const app = express();
app.use(express.json());
app.use(express.static(__dirname + "./build"));

const DB =
  "mongodb+srv://Gagan_Saini:gaganiscoder@cluster0.afqpweg.mongodb.net/Impact?retryWrites=true&w=majority";
mongoose
  .connect(DB)
  .then(() => {
    console.log("Connected Successfully");
  })
  .catch((err) => {
    console.log("Not connected to database", err);
  });

const userSchema = mongoose.Schema({
  username: String,
  useremail: String,
});

const User = mongoose.model("newuser", userSchema);

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/build" + "/index.html");
});

app.get("/feed", (req, res) => {
  User.find({}, function (err, foundUsers) {
    if (err) {
      console.log(err);
    } else {
      res.json(foundUsers);
    }
  });
});

const PORT = process.env.port || 5000;

app.listen(PORT, () => {
  console.log("Server is running at port ", +PORT);
});
