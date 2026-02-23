const express = require("express");
const app = express();

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.static("views"));

app.get("/", (req, res) => {
    const username = "cjdreamy";
    res.render("index", {username});
});





app.listen(3000, () => {
    console.log("Server is running on port 3000");
});