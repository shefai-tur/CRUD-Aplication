const express = require("express");
const router = require("./src/route/api");
const app = new express();
const bodyParser = require("body-parser");

//security middelwar
const rateLimit = require("express-rate-limit");
// const helmet = require ("hamlet")
const MongoSanitize = require("express-mongo-sanitize");
const xss = require("xss-clean");
// const  hpp  = require("hpp")
const cors = require("cors");

//Database

const mongoose = require("mongoose");

//security middelwar impliment

app.use(cors());
// app.use(helmet())
app.use(MongoSanitize());
app.use(xss());
// app.use(hpp())

//bodyparser impliment

app.use(bodyParser.json());

//reatelimit impliment

const limiter = rateLimit({ window: 15 * 60 * 100, max: 3000 });
//Database
mongoose.connect(
  "mongodb+srv://shefaitur:H5lPZN1vaadDCHNY@cluster0.y5rdxbg.mongodb.net/CRUD?retryWrites=true&w=majority&appName=Cluster0"
).then(() => console.log('DB Connected!'));

//Router Implimant
app.use("/api/v1", router);

//frontend taging
app.use(express.static("clint/dist"));
app.get("*", function (req, res) {
  res.sendFile(path.resolve(__dirname, "clint", "dist", "index.html"));
});

module.exports = app;
