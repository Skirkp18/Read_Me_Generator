// function to generate markdown for README
function generateMarkdown(data) {
  
  // console.log(` ${data.title}`)
  // console.log(` ${data.name}`)
  // console.log(` ${data.email}`)
  // console.log(` ${data.fileName}`)


  return `
  # ${data.title}
${License Badge}
## Description
${data.description}
## Table of Contents 
* [Installation](#installation)
* [Usage](#usage)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)
## Installation
To install necessary dependencies, run the following command:
\`\`\`
\`\`\`
## Usage
## Tests
To run tests, run the following command:
\`\`\`
\`\`\`
## Questions
If you have any questions about the repo, open an issue or contact me directly at ${data.email}. You can find more of my work at 
`;
}

module.exports = generateMarkdown;
