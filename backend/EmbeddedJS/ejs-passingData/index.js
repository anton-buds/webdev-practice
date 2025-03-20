import express from 'express';
import bodyParser from 'body-parser';

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

// My own way
// app.get('/', (req, res) => {
//     res.render('index.ejs', 
//         {
//             title: 'Enter your name below'
//         }
//     );
// });

// app.post('/submit', (req, res) => {
//     const fullName = req.body['fName'] + req.body['lName'];
//     const char = fullName.length;
//     res.render('index.ejs', 
//         {
//             title: `You have ${char} characters in your name`
//         }
//     );
// });

// Angela's way
app.get('/', (req, res) => {
    res.render('index.ejs');
});
 
app.post('/submit', (req, res) => {
    const numLetters = req.body.fName.length + req.body.lName.length;
    res.render('index.ejs', { numberOfLetters: numLetters });
});

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});