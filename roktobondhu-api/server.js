const express = require("express");
const mongoose = require("mongoose");
const userRoute = require("./routes/userRoute.js");

const app = express();
app.use(express.json());

// use root route api
app.use("/api/user", userRoute);

// mongoose connection
mongoose
  .connect(
    "mongodb+srv://rokto_bondhu_api:rp3Z3ggvoVgtpKka@cluster0.1ssjj.mongodb.net/Rokto_Bondhu_Api?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("database connected");
    app.listen(4000 || process.env.PORT, () => {
      console.log("app is listening");
    });
  })
  .catch((err) => {
    console.log(err);
  });
