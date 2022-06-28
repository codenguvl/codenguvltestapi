const express = require("express");
const app = express();
require("dotenv").config();
const port = process.env.PORT || 3000;
const userRoutes = require("./routes/user");
const mongoose = require("mongoose");
app.use(express.json());
app.use("/api", userRoutes);
app.get("/", (req, res) => {
  res.send("cái lồn má");
});
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested, Content-Type, Accept Authorization"
  );
  if (req.method === "OPTIONS") {
    res.header("Access-Control-Allow-Methods", "POST, PUT, PATCH, GET, DELETE");
    return res.status(200).json({});
  }
  next();
});
mongoose
  .connect(
    "mongodb+srv://codenguvl:codenguvl@cluster0.ngmugqj.mongodb.net/?retryWrites=true&w=majority"
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
