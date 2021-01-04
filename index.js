const Express = require('express');
const Books = require('./Books')

const app = Express();
const port = 3000;


// GET
app.get("/books", (req, res) => {
    res.json(Books);
});

app.get("/books/:id", (req, res) => {
    let book = Books.find(book => book.id == req.params.id);
    res.json(book);
});

app.listen( port, () => console.log("HTTP server listening on port " + port))