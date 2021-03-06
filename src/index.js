const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();
const userRoutes = require("./routes/user");
const mongoose = require("mongoose");
app.use(express.json());
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});
app.use("/api", userRoutes);
app.get("/", (req, res) => {
  res.send("Test API");
});
app.use(
  cors({
    origin: "*",
  })
);
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
