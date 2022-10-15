// const fs = require("fs");

// fs.writeFileSync("notes.txt", "My name is mujeebansari");

// challenge append a mesage to notes.txt
// use appendFileSync to append to the writeFileSync
// Run script
// check your work by opening the file and viewing the appended text

// fs.appendFileSync("notes.txt", "i live in Mumbai central");
const validator = require("validator");
const getNotes = require("./notes.js");

const msg = getNotes();
console.log(msg);

// const name = "Mujeeb";

// const sum = add(4, 1);

console.log(validator.isEmail("Mujeeb@gmail.com"));
console.log(validator.isURL("gmail.com"));
