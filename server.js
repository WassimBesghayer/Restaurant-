const express = require("express");
const app = express();
require("dotenv").config();
const db_connect = require("./connect_db");
app.use(express.json());
db_connect();
// app.get("/wassim", (req, res)=>res.send("hello"))
app.listen(process.env.PORT, (err) => err ? console.log(err) : console.log("server is running well"));
app.use("/user", require("./routes/users"))