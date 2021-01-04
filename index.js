const Express = require('express');

const app = Express();
const port = 3000;


// GET
app.get("/", (req, res) => {
    res.send("Hello world!")
})

app.listen( port, () => console.log("HTTP server listening on port " + port))