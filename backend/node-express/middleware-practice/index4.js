// Challenge: Create a simple form that takes a street name and a pet name. When the form is submitted, the server should respond with a band name by combining the street name and pet name. For example, if you enter "Sunset Blvd" and "Goose", the server should respond with "Sunset Blvd Goose".

import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";
import morgan from "morgan";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true})); // needed to parse the incoming request body and make it available in the req object as req.body
app.use(morgan("tiny"));

let bandName = "";

// create your middleware function
const bandNameGenerator = (req, res, next) => { // middleware function that generates the band name you entered in the form
    console.log(req.body);
    bandName = req.body.street + " " + req.body.pet; // body.street and body.pet are the names of the input fields in the form and only works if the form has an input field with the name "street" and another input field with the name "pet"
    
    // bandName = req.body["street"] + " " + req.body["pet"]; // another way to access the values of the input fields in the form using bracket notation and the name of the input fields as the key in the req.body object
    next();
};

app.use(bandNameGenerator);

app.get("/", (req, res) => {
    console.log("GET request received");
    res.sendFile(__dirname + "/public/index.html");
})

app.post("/submit", (req, res) => {
    console.log(req.body);
    // res.send(`<h1>Your band name is: </h1> <h2>${req.body.street + " " + req.body.pet}</h2>`); // first way and less code
    res.send(`<h1>Your band name is: </h1> <h2>${bandName}</h2>`); // second way
});

app.listen(port, () => {
    console.log(`Server started on ${port}`);
});