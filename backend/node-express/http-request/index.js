// Request Vocab

// GET - request resource from a server (ex: html website, text, piece of data from database)
// POST - sending a resource to a server (ex: piece of info like in FORM to sign up)
// PUT - update methods - replace a resource "completely"
// PATCH - update methods - patch up a resource, not completely replace but replace only a part 
// DELETE - delete resource 

// Exercise 3.2 HTTP Requests

import express from "express";
const app = express();
const port = 3000;

// get means request a resource when the endpoints are met like localhost:3000/ , localhost:3000/about , localhost:3000/contact
app.get("/", (req, res) => {
    res.send("<h1>HELLO from HOME PAGE</h1>");
});
app.get("/contact", (req, res) => {
    res.send("<h1>Contact Me</h1> Phone: +63 9551439374");
});
app.get("/about", (req, res) => {
    res.send("<h1>About page</h1> I'm anton blah blah blah blah");
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

// Use NODEMON npm package
// no more manually restarting of port every time there is a change
// replace node with ---> nodemon index.js
// refresh browser after hitting save 

