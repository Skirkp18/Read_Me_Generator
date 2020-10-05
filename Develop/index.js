const inquirer = require("inquirer");
const fs = require("fs");

// array of questions for user
const prompt = require("inquirer")
const generateMarkdown = require("./utils/generateMarkdown")

const questions = [
    {
        message: "What is the title??",
        name: "title"
    },
    {
        message: "What is the file name?",
        name: "name"
    },
    {
        message: "What is your email?",
        name: "email"
    },
    {
        message: "What is the name of the file",
        name: "fileName"
    }
];




// function to write README file
async function writeToFile(fileName, data) {
    // console.log(data);
    fs.writeFile(fileName, data, (err) => {
        if (err) throw err;
        console.log('README Generated!');
      });
}

// function to initialize program
async function init() {
    const answers = await inquirer.prompt(questions);
    console.log(answers.name);

    generateMarkdown(answers)
    


    writeToFile(answers.name + ".json", answers)
}

// function call to initialize program
init();
// writeToFile();
