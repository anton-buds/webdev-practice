import express from 'express';
import bodyParser from 'body-parser';

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

// Logic



app.get('/', (req, res) => {
    res.render('index.ejs');
});

app.get('/essay', (req, res) => {
    res.render('essay.ejs');
});

app.get('/bio', (req, res) => {
    res.render('bio.ejs');
});

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});

