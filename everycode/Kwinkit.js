modules.exports = {
    port: Process.env.PORT,
    files: ["./**/*.{html,htm,css,js}"],
    server: {
        baseDir: ["./src","./build/contracts"]
    }
}

app.listen(process.env.PORT || 8080);