import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true}));

app.get("/", (req, res) => {
    const data = {
        title: "EJS Tags",
        seconds:  new Date().getSeconds(),
        items: ["apple", "banana", "cherry"],
        htmlContent: "<em>This is some em text</em>",
    };
    // if (data.seconds % 2 === 0){ 
    //     for(let i = 0; i < data.items.length; i++){
    //         let list = data.items[i];
    //     }
    // }

    res.render("index.ejs", data);
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});