// const fs = require("fs"); // type of CJS or Common JS
// let generateName = require("sillyname"); // CJS type --- call out the npm installed

// import generateName from "sillyname"; // ESM type 
// let sillyName = generateName(); // assign a variable to the generated name

// console.log(`My name is ${sillyName}`); // print out the generated silly name using string concatination using `` quotes

    // fs.writeFile("message.txt", "Hello from nodeJS! \nI am learning nodeJS from mentor Angela Yu! <3", (err) => {
    //    if (err) throw err;
    //    console.log("The file has been saved!");
    // });

// fs.readFile("./message.txt", "utf8", (err, data) => { // we want utf-8 to output a text instead of the buffer
//     if (err) throw err;
//     console.log(data);
// });

import {randomSuperhero} from 'superheroes'; // ESM type
let superhero = randomSuperhero();
console.log(`I am ${superhero},`, `I'm here to save you!`);