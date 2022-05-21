// TODO: Include packages needed for this application
const inquirer = require('inquire');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        message: "What is the title of your project?",
        name: "title"
    },
    {
        type: "input",
        message: "Provide a short description explaining the what, why, and how of your project",
        name: "description"
    }
    {
        type: "input",
        message: "What are the steps required to install your project?",
        name: "steps required to install"
    },
    {
        type: "input",
        message: "Provide instructions and examples for use.",
        name: "instructions"
    },
    {
        type: "input",
        message: "List your collaborators",
        name: "collaborators",

    },
    {
        type: "input",
        message:"Did you use any third-party assests that require attribution",
        name: "Third party assets"
    },
    {
        type: "input",
        message:"If your followed tutorials include links",
        name: "tutorials"
    }
    {
        type: "input",
        message: "Choose a kind of license"
        name: "license"
    }

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();