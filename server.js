const dotenv = require("dotenv");
const ProductModel = require("./dbmodels/product.models");
dotenv.config();
const mongoose = require("mongoose");
const express = require("express");
const app = express();
const uri = process.env.MONGODB_URI;


app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.static("views"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => {
    res.render("index");
});

//create product

app.post("/products", async (req, res) => {

    try {
        const product = await ProductModel.create(req.body);
        res.status(201).json({ message: "Product created successfully" });
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
});

//delete product

app.delete("/products/:id", async (req, res) => {
    try {
        const product = await ProductModel.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: "Product deleted successfully" });
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
});

//update product

app.put("/products/:id", async (req, res) => {
    try {
        const product = await ProductModel.findByIdAndUpdate(req.params.id, req.body);
        res.status(200).json({ message: "Product updated successfully" });
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
});

//get all products

app.get("/products", async (req, res) => {
    try {
        const products = await ProductModel.find();
        res.status(200).json({ products });
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
});

//get single product

app.get("/products/:id", async (req, res) => {
    try {
        const product = await ProductModel.findById(req.params.id);
        res.status(200).json({ product });
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
});

mongoose.connect(`${uri}`)
    .then(() => {
        console.log("Connected to MongoDB");
        app.listen(3000, () => {
            console.log("Server is running on port 3000");
        });
    })
    .catch((error) => {
        console.error("Error connecting to MongoDB:", error);
    });




