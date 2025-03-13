// NODE + EXPRESS.JS
// First Server Using Express.js

// Request Vocab

// GET - request resource from a server (ex: html website, text, piece of data from database)
// POST - sending a resource to a server (ex: piece of info like in FORM to sign up)
// PUT - update methods - replace a resource "completely"
// PATCH - update methods - patch up a resource, not completely replace but replace only a part 
// DELETE - delete resource 


import express from "express"; // module based javascript - ESM
const app = express(); // create an app using express object
const port = 3000;

// new lesson line
app.get("/", (req, res ) => {
    res.send("Hello, World!");
});


app.listen(port, () => { // 3000 is the port, then a callback function is called in that port using the listen method
    console.log(`Server running on port ${port}.`); // output when connected to the port, used backtick for string interpolation
});

