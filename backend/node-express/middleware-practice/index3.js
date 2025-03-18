import express from "express";
import bodyParser from "body-parser";
import morgan from "morgan";

const app = express();
const port = 3000;

const logger = (req, res, next) => {
    console.log("Request Method: ", req.method);
    console.log("Request URL: ", req.url);
    next();
};

// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(morgan("combined"));
app.use(logger);


app.get("/", (req, res) => {
    res.send("GET request received");
});     
// app.get("/submit", (req, res) => {
//     res.send("SUBMIT request received");
// });

app.listen(port, () => {
    console.log(`Server started on ${port}`);
});