require("dotenv").config();

// import { authUser } from "./middleware/basicAuth";

const express = require("express");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const app = express();
app.use(express.json());

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

app.get("/", (req, res) => {
  res.send("Hi");
});

app.get("/feed", (req, res) => {
  //   const data = [
  //     {
  //       id: 1,
  //       name: "Gagan Saini",
  //     },
  //     {
  //       id: 2,
  //       name: "Kira Ruke",
  //     },
  //     {
  //       id: 3,
  //       name: "Alan Walker",
  //     },
  //   ];

  User.find({}, function (err, foundUsers) {
    if (err) {
      console.log(err);
    } else {
      res.json(foundUsers);
    }
  });
});

app.post("/currentUser", (req, res) => {
  //   console.log(req.headers.accesstoken);
  const accessToken = req.headers.accesstoken;
  jwt.verify(accessToken, process.env.ACCESS_TOKEN, function (err, user) {
    if (err) {
      console.log(err);
    } else {
      res.json({ user });
    }
  });
});

app.post("/login", (req, res) => {
  const username = req.body.username;
  const useremail = req.body.useremail;

  const user = new User({
    username: username,
    useremail: useremail,
  });
  user.save();

  const accessToken = jwt.sign(
    {
      username: username,
      useremail: useremail,
    },
    process.env.ACCESS_TOKEN
  );
  res.json({ accessToken });
});

app.listen(5000, () => {
  console.log("Server is running at port 5000");
});
