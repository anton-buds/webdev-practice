import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";
import e from "express";

const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

// create your middleware function
// The code block below is a middleware function that checks if the password is correct. If the password is correct, the function calls the next() function to pass the control to the next middleware function. If the password is incorrect, the function sends the index.html file to the client.
const letMeIn = (req, res, next) => {
    console.log(req.body);
    if (req.body.password === "ILoveProgramming"){
        console.log("Correct password");
        // isAuthorized = true;
        next();
    }
    else {
        res.sendFile(__dirname + "/public/index.html"); // send the index.html file back to the client or they stay on the same page
    }
}


app.get("/", (req, res) => {
    console.log(__dirname + "/public/index.html");
    res.sendFile(__dirname + "/public/index.html");
});

// The code block below is a POST request that sends the secret.html file to the client if the password is correct. 
// the letMeIn middleware function is called before the POST request is executed. If the password is correct, the letMeIn middleware function calls the next() function to pass the control
app.post("/check", letMeIn, (req, res) => {
    res.sendFile(__dirname + "/public/secret.html");
});

// other method of the code above without using the letMeIn middleware function as the second argument in the POST request
// app.use(letMeIn);
// let isAuthorized = false;
// app.post("/check", (req, res) => {
//     if (isAuthorized){
//         res.sendFile(__dirname + "/public/secret.html");
//     } else {
//         res.redirect("/");
//     }
// });

app.listen(port, () => {
    console.log(`Server started on ${port}`);
});