modules.exports = {
    port: Process.env.PORT,
    files: ["./**/*.{html,htm,css,js}"],
    server: {
        baseDir: ["./src","./build/contracts"]
    }
}

const express = require("express");
const app = express();

app.get("/", (req, res) =>
    res.json,{
        heyguys: "helloworld",
    });

app.listen(process.env.PORT || 8080);