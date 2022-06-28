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
mongoose
  .connect(process.env.MONGODB_URI.toString())
  .then(() => console.log("connect result"))
  .catch((err) => console.log(err));
app.listen(process.env.PORT || 3000, function () {
  console.log(
    "Express server listening on port %d in %s mode",
    this.address().port,
    app.settings.env
  );
});
