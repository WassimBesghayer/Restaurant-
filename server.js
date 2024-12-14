const express = require("express");
const app = express();
require("dotenv").config();
const db_connect = require("./conect_db");
db_connect();

app.listen(process.env.PORT, (err) => err ? console.log(err) : console.log("server is running well"));
app.use("/user", require("./routes/user"))