const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();
const port = process.env.PORT || 3000;
const userRoutes = require("./routes/user");
const mongoose = require("mongoose");
app.use(express.json());
app.use("/api", userRoutes);
app.get("/", (req, res) => {
  res.send("Test API");
});
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
//
app.use(function (req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "http://127.0.0.1:5500/tt.html");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  res.setHeader("Access-Control-Allow-Credentials", true);
  next();
});
//
mongoose
  .connect(
    "mongodb+srv://codenguvl:codenguvl@cluster0.ngmugqj.mongodb.net/?retryWrites=true&w=majority",
    { useNewUrlParser: true }
  )
  /* .connect(process.env.MONGODB_URI) */
  .then(() => console.log("connect result"))
  .catch((err) => console.log(err));
app.listen(process.env.PORT || 3000, function () {
  console.log(
    "Express server listening on port %d in %s mode",
    this.address().port,
    app.settings.env
  );
});
