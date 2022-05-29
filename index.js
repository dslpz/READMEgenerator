// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./generateMarkdown.js');

// TODO: Create an array of questions for user input 
inquirer.prompt([
    {
        type: "input",
        message: "Please enter your projects title.",
        name: "title"
    },
    {
        type: "input",
        message: "Please enter a description of your project.",
        name: "description"
    },
    {
        type: "input",
        message: "Please enter the installation instructions for your project.",
        name: "installation"
    },
    {
        type: "input",
        message: "Please enter usage information for your project.",
        name: "usage information"
    },
    {
        type: "input",
        message: "Please enter contribution guidelines for your project.",
        name: "contribution guidelines",

    },
    {
        type: "input",
        message:"Please enter test instructions for your project.",
        name: "tests"
    },
    {
        type: "list",
        message:"Please choose a license for your project",
        name: "license",
        choices: ["MIT", "Apache 2.0","none"]
    },
    {
        type: "input",
        message: "Please enter your GitHub username.",
        name: "github username"
    }
])
;

init() 
    then(data => {
        console.log("success");
        return writeToFile("./readme/README.md", generateMarkdown({...data}))
        });
