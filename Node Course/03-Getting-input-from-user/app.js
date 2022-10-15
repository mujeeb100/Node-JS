// const fs = require("fs");

// fs.writeFileSync("notes.txt", "My name is mujeebansari");

// challenge append a mesage to notes.txt
// use appendFileSync to append to the writeFileSync
// Run script
// check your work by opening the file and viewing the appended text

// fs.appendFileSync("notes.txt", "i live in Mumbai central");
// const validator = require("validator");
//const chalk = require("chalk");
const getNotes = require("./notes.js");
const yargs = require("yargs");

//customize yargs version
yargs.version("1.1.0");

//Create add command
yargs.command({
  command: "add",
  describe: "Add a new project",
  handler: function () {
    console.log("Adding a new project");
  },
});

//create remove command
yargs.command({
  command: "remove",
  describe: "Remove a project",
  handler: function () {
    console.log("Removing a project");
  },
});

//create a list command
yargs.command({
  command: "list",
  describe: "List all projects",
  handler: function () {
    console.log("List all projects");
  },
});

//create a read command
yargs.command({
  command: "read",
  describe: "Read a project",
  handler: function () {
    console.log("Reading a project");
  },
});

//add, remove,read, list
console.log(yargs.argv);
