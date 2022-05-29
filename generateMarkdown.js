

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Table of Contents
[Description](#description)
[Installation](#installation)
[Usage](Usage)
[Contribution](Contribution)
[Testing](Testing)
[License](License)
[Questions](Questions)
## Description
${data.description}
## Installation
${data.installation}
## Usage
${data.usage}
## Contribution
${data.contribution}
## Testing
${data.testing}
## License
${data.license}
## Questions
${data.github}
`;
}

module.exports = generateMarkdown;
