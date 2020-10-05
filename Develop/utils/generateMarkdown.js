// function to generate markdown for README
async function generateMarkdown(data) {
  
  console.log(` ${data.title}`)
  console.log(` ${data.name}`)
  console.log(` ${data.email}`)
  console.log(` ${data.fileName}`)


  let fileName = ` ${data.fileName}`;

  const markDown = `# ${data.title}`
  console.log(markDown);

}

module.exports = generateMarkdown;
