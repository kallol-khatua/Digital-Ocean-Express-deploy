require("dotenv").config();

const express = require("express");
const app = express();
const cors = require("cors");
const path = require('path');

app.use(cors());

app.get("/api", (req, res) => {
    res.status(200).send({ success: true, message: "Working fine" });
})

app.get("/api/hello", (req, res) => {
    res.status(200).send({ success: true, message: "Hello World!" });
})

app.get("/api/getname", async (req, res) => {
    res.status(200).send({ success: true, message: "Get name", name: process.env.NAME || "Name not from env" });
})

app.use(express.static(path.join(__dirname, "/frontend/dist")))
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, '/frontend/dist', 'index.html'));
})

const port = process.env.PORT || 8080;

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
})