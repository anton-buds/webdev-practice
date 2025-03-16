import express from "express";
import bodyParser from "body-parser";
import morgan from "morgan";

const app = express();
const port = 3000;

const logger = (req, res, next) => {
    res.send("Hello from the logger middleware");
    console.log("Hello from the logger middleware");
    next();
};

app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan("combined"));
app.use(logger);


app.get("/", (req, res) => {
    res.send("GET request received");
});

app.listen(port, () => {
    console.log(`Server started on ${port}`);
});