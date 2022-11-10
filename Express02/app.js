require("dotenv").config();
const express = require("express");

const app = express();

const port = process.env.APP_PORT ?? 5000;

const welcome = (req, res) => {
  res.send("Welcome to my list of Users");
};

app.get("/", welcome);

const users = require("./users");

app.get("/api/users", users.getUsers);
app.get("/api/users/:id", users.getUsersById);

app.listen(port, (err) => {
  if (err) {
    console.error("Something bad happened");
  } else {
    console.log(`Server is listening on ${port}`);
  }
});
