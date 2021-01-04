const Express = require('express');
const Books = require('./Books')

const app = Express();
const port = 3000;

app.use(Express.json());
app.use(Express.urlencoded({extended: true}));

function middleware(req, res, next) {
    console.log(req.body);
    console.log(req.query);

    next();
}

// GET
app.get("/books", middleware, (req, res) => {
    res.json(Books);
});

app.get("/books/:id", (req, res) => {
    let book = Books.find(book => book.id == req.params.id);
    res.json(book);
});

// POST
app.post("/testpost", (req, res) => {
    console.log(req.body);
})

app.listen( port, () => console.log("HTTP server listening on port " + port))