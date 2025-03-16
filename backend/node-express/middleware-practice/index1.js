// MIDDLEWARE PRACTICE
// This practice a pre-processing type of middleware that parses the incoming request body and makes it available in the req object as req.body. This is useful when the client sends data to the server using POST method. The data is sent in the request body and the body-parser middleware parses the data and makes it available in the req object.


import express from "express"; 
import bodyParser from "body-parser"; // body-parser is a middleware that parses the incoming request body and makes it available in the req object as req.body
import morgan from "morgan"; // morgan is a middleware that logs the incoming requests to the server 
import { dirname } from "path"; // path module is used to work with file and directory paths
import { fileURLToPath } from "url"; // url module is used to work with URLs
const __dirname = dirname(fileURLToPath(import.meta.url)); // get the directory name of the current module

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true })); // mount the middleware using .use() method
app.use(morgan("combined")); // mount the middleware using .use() method

app.post("/submit", (req, res) => {
    console.log(req.body); // req.body is available because of the body-parser middleware
    res.send("Data received"); // send a response back to the client
});

app.get("/", (req, res) => {
    console.log(`This is the output: ${__dirname + "/public/index.html"}`);
    res.sendFile(__dirname + "/public/index.html"); // public folder is for static files like html, css, js
});

app.listen(port, () => {
    console.log(`Server started on ${port}`);
});