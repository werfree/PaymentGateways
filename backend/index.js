const cors = require("cors");
const express = require("express");
const uuid = require("uuid/v4");
//const stripe = require("stripe")

const app = express();

//middleware

app.use(express.json());
app.use(cors());

// routes
app.get("/", (req, res) => {
  res.send("On Home Get");
});

//listen

app.listen(3000, () => {
  console.log("Listening at port 3000");
});
