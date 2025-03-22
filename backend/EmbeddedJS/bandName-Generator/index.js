import express from 'express';
import bodyParser from 'body-parser';

const app = express();
const port = 3000;

// Step 3 - Make styling show up
app.use(express.static("public"));
// Hint 1 - CSS files are static files
// Hint 2 - The header and footer are partials
// Hint 3 - Add the CSS files to header.ejs
// Step 4 - Add a dynamic year to the footer
// Hint 1 - Google to find out how to get the current year in JavaScript
  
app.use(bodyParser.urlencoded({ extended: true }));

// Random List Generator
const adj = ['Red', 'Blue', 'Green', 'Yellow', 'Purple', 'Orange', 'Pink', 'Black', 'White', 'Grey'];
const noun = ['Apple', 'Banana', 'Cherry', 'Grape', 'Kiwi', 'Lemon', 'Mango', 'Orange', 'Peach', 'Pear'];


// Dynamic Year
const year = new Date().getFullYear();
const title = "Welcome to Band Name Generator"; 

app.get('/', (req, res) => {
    // Step 1 - Make the GET route work and render the index.ejs file
   res.render('index.ejs',(
    {
        year: year,
        title: title,
    }
));
});


app.post('/submit', (req, res) => {

    // Step 2 - Make the generate name functionality work
    // Hint: When button in index.ejs is clicked, it sends a POST request to /submit
    // Then: 1. You should randomly pick and adj from the const "adj" and a noun from const "noun"
    //       2. Send the index.ejs as a response and add the adj and noun to the res.render
    //       3. Test to make sure that the random words display in the h1 element in index.ejs

    const randomAdj = adj[Math.floor(Math.random() * adj.length)];
    const randomNoun = noun[Math.floor(Math.random() * noun.length)];
    const bandName = randomAdj + ' ' + randomNoun;

    res.render('index.ejs', (
        {
            title: bandName,
            year: year
        }
    ));
    console.log(bandName);
});

app.listen(port, () =>{
    console.log(`Server started on port ${port}`);
});
