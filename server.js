const dotenv = require("dotenv");
dotenv.config();
const mongoose = require("mongoose");
const express = require("express");
const app = express();
const uri = process.env.MONGODB_URI;


app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.static("views"));

app.get("/", (req, res) => {
    const username = "cjdreamy";
    res.render("index");
});

mongoose.connect(`${uri}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});




app.listen(3000, () => {
    console.log("Server is running on port 3000");
});