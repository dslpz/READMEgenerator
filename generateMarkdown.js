

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
${input.github}
`;
}

module.exports = generateMarkdown;