// function to generate markdown for README
function generateMarkdown(data) {
  
  // console.log(` ${data.title}`)
  // console.log(` ${data.name}`)
  // console.log(` ${data.email}`)
  // console.log(` ${data.fileName}`)

  if (`${data.license}` === "MIT") {
    var badge = "https://img.shields.io/github/license/" + `${data.github}` + "/" + `${data.url}`;
  }

  console.log(`${data.license}`);

  return `
  # ${data.title}`
`## Description
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
${data.install}
\`\`\`
## Usage
${data.usage}
## Tests
To run tests, run the following command:
\`\`\`
${data.test}
\`\`\`
## Questions
If you have any questions about the repo, open an issue or contact me directly at ${data.email}. You can find more of my work at 
`;
}

module.exports = generateMarkdown;
