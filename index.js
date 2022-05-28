// TODO: Include packages needed for this application
const inquirer = require('inquire');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        message: "Please enter your project title.",
        name: "title"
    },
    {
        type: "input",
        message: "Please enter a description of your project.",
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
        type: "list",
        message:"Please choose a license for your project",
        name: "license",
        choices: ["MIT", "none"]
    },
    {
        type: "input",
        message: "Please enter your GitHub username",
        name: "github username"
    },

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    var readMeText = `# ${input.title}
## Table of Contents
[Description](#description)
[Installation](#installation)
[Usage](Usage)
[Contribution](Contribution)
[Testing](Testing)
[License](License)
[Questions](Questions)
## Description
${input.description}
## Installation
${input.installation}
## Usage
${input.usage}
## Contribution
${input.contribution}
## Testing
${input.testing}
## License
${input.license}
## Questions
${input.github}`

fs.writeToFile("./README.md", readMeText, err => {
    if (err) {
        console.error(err)
        return
    }
    })

};

init() 
    then(data => {
        console.log("README created! Check 'readme' folder");
        return writeToFile("./readme/README.md", generateMarkdown({...data}))
        });