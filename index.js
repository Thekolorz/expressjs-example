const Express = require('express');
const Books = require('./Books')

const app = Express();
const port = 3000;


// GET
app.get("/", (req, res) => {
    res.json(Books);
})

app.listen( port, () => console.log("HTTP server listening on port " + port))