const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const path = require("path");

const app = express();
const routes = require("./routes/posts");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.use("/api", routes);

//connect to mongodb
//let mongodburl = "mongodb://localhost:27017";
let mongodburl = "mongodb://mongo:27017";
mongoose.connect(mongodburl);
mongoose.Promise = global.Promise;
mongoose.set("useFindAndModify", false);

app.use(express.static(path.join(__dirname, "public")));

const port = 8000 || process.env.port;

app.listen(port, () => console.log(`listening on port ${port}`));
