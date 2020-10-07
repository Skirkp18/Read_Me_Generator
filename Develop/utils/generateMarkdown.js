// function to generate markdown for README
function generateMarkdown(data) {

const mitLicenseTxt = "This project is licensed under the MIT License. A short and simple permissive license with conditions only requiring preservation of copyright and license notices. Licensed works, modifications, and larger works may be distributed under different terms and without source code.";
const apacheLicenseTxt = "This project is licensed under the Apache License 2.0. A permissive license whose main conditions require preservation of copyright and license notices. Contributors provide an express grant of patent rights. Licensed works, modifications, and larger works may be distributed under different terms and without source code."; 
const gplLicenseTxt = "This project is licensed under the GNU General Public License v3.0. Permissions of this strong copyleft license are conditioned on making available complete source code of licensed works and modifications, which include larger works using a licensed work, under the same license. Copyright and license notices must be preserved. Contributors provide an express grant of patent rights.";
const bsdLicenseTxt = "This project is licensed under the BSD 3-Clause 'New' or 'Revised' License. A permissive license similar to the BSD 2-Clause License, but with a 3rd clause that prohibits others from using the name of the project or its contributors to promote derived products without written consent."


  // badge img generation
  if (`${data.license}` === "MIT") {
    data.licenseBadge = "![GitHub](https://img.shields.io/badge/license-MIT-green?style=flat)";
    data.licenseTxt = mitLicenseTxt
  } else if (`${data.license}` === "APACHE 2.0") {
    data.licenseBadge = "![GitHub](https://img.shields.io/badge/license-APACHE_2.0-blue?style=flat)";
    data.licenseTxt = apacheLicenseTxt;
  } else if (`${data.license}` === "GPL 3.0") {
    data.licenseBadge = "![GitHub](https://img.shields.io/badge/license-GPL_3.0-yellow?style=flat)"
    data.licenseTxt = gplLicenseTxt;
  } else if (`${data.license}` === "BSD 3") {
    data.licenseBadge = "![GitHub](https://img.shields.io/badge/license-BSD_3-orange?style=flat)"
    data.licenseTxt = bsdLicenseTxt;
  } else if (`${data.license}` === "None") {
    data.licenseBadge = "";
    data.licenseTxt = "No license was chosen."
  }

  return `# ${data.title}

![GitHub](https://img.shields.io/github/downloads/${data.github}/${data.repo}/total) ![GitHub](https://img.shields.io/github/languages/top/${data.github}/${data.repo}) ${data.licenseBadge} 

## Description
${data.description}
## Table of Contents 
* [Installation](#installation)
* [Usage](#usage)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)
* [License](#license)
## Installation
To install necessary dependencies, run the following command:
\`\`\` 
${data.install}
\`\`\`
## Usage
${data.usage}
## Contributing
${data.contributions}
## Tests
To run tests, run the following command:
\`\`\`
${data.test}
\`\`\`
## Questions
If you have any questions about the repo, open an issue or contact me directly at ${data.email}. You can find more of my work on [GitHub](https://github.com/${data.github}).
## License
${data.licenseTxt}
`;
}

module.exports = generateMarkdown;
