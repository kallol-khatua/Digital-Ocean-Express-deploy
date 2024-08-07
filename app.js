const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.status(200).send({ success: true, message: "Working fine" });
})

const port = process.env.PORT || 8080;
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
})