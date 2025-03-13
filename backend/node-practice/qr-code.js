/* 
    QR CODE CHALLENGE

1. Use the inquirer npm package to get the user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt.file to save the user input using the native fs node module. 
 */

// CJS format
// let qrCode = require('qr-image');
// let qr_png = qrCode.image("I love QR!", {type: `svg`});
// qr_png.pipe(require('fs').createWriteStream('i_love_qr.svg'));
// let qr_string = qrCode.imageSync('I love QR!', {type: 'svg'});
// console.log(`This is my QR code. ${qr_string}`);


// ESM type format
import inquirer from 'inquirer'; // npm i inquirer
import qrImage from "qr-image"; // npm i qr-image
// double check your dependencies in package.json if module is installed

import fs from "fs"; // ESM type, when you need the fs module so you woudn't call require("fs") like in commonJS
// var fs = require("fs"); // commonJS format of the code line above
let qrCode = qrImage;

// let qr_png = qrCode.image("I love QR!", {type: `svg`});
// qr_png.pipe(qrCode.createWriteStream('i_love_qr.svg'));

// let qr_string = qrCode.imageSync('I Love QR!', {type: 'svg'});


// inquirer for user prompts
inquirer
  .prompt([
    {
        // to ask for user input with a message that will be shown to the user
        // that will be stored in a object key "name" with the value of "URL"
        message: "Type in your URL: ", 
        name: "URL" // remember what you learned from creating an object in javascript
    }
  ])
  .then((answers) => {
    // console.log(answers); // check if answers holds your URL or your input
    const url = answers.URL; // calls out the URL name in the prompt and store it in a variable
    let qr_png = qrCode.image(url); // what this line does is convert your input into a url image, with the default type value of png
    qr_png.pipe(fs.createWriteStream('qr_img.png')); // to create a file name for the generated QR image

    // Create a txt file
    fs.writeFile('url.txt', url, (err) => { // to create a text file that stores your input
        if (err) throw err;
        console.log('The file has been saved!');
      }); 
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });


