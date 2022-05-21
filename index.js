// TODO: Include packages needed for this application
const inquirer = require('inquire');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        message: "Please enter your project title",
        name: "title"
    },
    {
        type: "input",
        message: "Please enter a description of your project",
        name: "description"
    },
    {
        type: "input",
        message: "Please enter installation instructions for your project",
        name: "installation"
    },
    {
        type: "input",
        message: "Please enter usage information for your project",
        name: "usage information"
    },
    {
        type: "input",
        message: "Please enter contribution guidelines for your project",
        name: "contribution guidelines",

    },
    {
        type: "input",
        message:"Please enter test instructions for your project",
        name: "tests"
    },
    {
        type: "input",
        message:"Please choose a license for your project",
        name: "tutorials"
    },
    {
        type: "input",
        message: "Please enter your GitHub username",
        name: "license"
    },

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();