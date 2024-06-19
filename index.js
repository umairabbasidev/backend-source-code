require('dotenv').config()


const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/facebook", (req, res) => {
  res.send("umairabbasidotcom");
});

app.get("/login", (req, res) => {
  res.send("<h1>Welcome to login page!</h1>");
});

app.get("/users", (req, res) => {
  res.send([
    {
      name: "Umair",
      age: 22,
      Ecucation: "BSCS",
      Skill: "Full stack developer",
    },
    {
      name: "Asadullah",
      age: 20,
      Ecucation: "BSCS",
      Skill: "Frontend developer",
    },
    {
      name: "Uzair",
      age: 23,
      Ecucation: "Enter",
      Skill: "graphic designer",
    },
    {
      name: "Noman Gul",
      age: 22,
      Ecucation: "Matric",
      Skill: "Full stack developer",
    },
  ]);
});

app.get("/logout",(req,res)=>{
 res.send("<h3>You have signed out from your current LMS session Click </ <a href=''> HERE </a> to Sign In again </h3>. ")
})

app.get("/about", (req, res) => {
 res.send("<h1>Welcome to About page!</h1>");
});



app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`);
});
