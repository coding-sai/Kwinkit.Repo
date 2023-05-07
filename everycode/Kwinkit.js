const express = require("express");
const app = express();

app.get("/", (req, res) =>
    res.json,{
        heyguys: "helloworld",
    });

app.listen(process.env.PORT || 8080);