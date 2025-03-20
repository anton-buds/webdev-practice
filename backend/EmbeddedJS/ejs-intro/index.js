import express from "express";
import bodyParser from "body-parser";


const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({extended: true}));

// console.log(day);

// let template;
// if (whatDay === 3 || whatDay === 6){
//     day = "weekend";
//     template = ejs.compile("Hey! It's a <%= day %>, it's time to relax!");
// } else {
//     day = "weekday";
//     template = ejs.compile("Hey! It's a <%= day %>, it's time to work hard!");
// }
app.get("/", (req, res) => {
    res.render("index.ejs", {day: "", message: ""});
});

// the code below is works 
app.get("/submit", (req, res) => {
    const whatDay = new Date();
    let day = whatDay.getDay();
    console.log(day);
    // conditional == my own logic
    if (day === 0 || day === 6){
        res.render("index.ejs", {day: "weekend", message: "it's time to have fun!"});
    } else {
        res.render("index.ejs", {day: "weekday", message: "it's time to work hard!"});
    }
    
    // other way, angela's logic
    let type = "a weekday";
    let message = "it's time to work hard!";
    if (day === 0 || day === 6){
        type = "the weekend";
        message = "it's time to relax!";
    } else{
        type
    }

    res.render("index.ejs", 
        {
        day: type, 
        message: message
        }
    );
});

app.listen(port, () => {
    console.log(`Server started on ${port}`);
});