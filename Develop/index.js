const inquirer = require("inquirer");
const fs = require("fs");

// array of questions for user
const prompt = require("inquirer")
const generateMarkdown = require("./utils/generateMarkdown");

const questions = [
    {
        message: "What is the name of the project title?",
        name: "title"
    },
    {
        message: "What is the name of the GitHub repo?",
        name: "repo"
    },
    {
        message: "Give a brief description of the project.",
        name: "description"
    },
    {
        message: "Give a brief description on how to install the program or app.",
        name: "install"
    },
    {
        message: "Give a breif description on how to use the app or program.",
        name: "usage"
    },
    {
        message: "Enter contribution guidlines.",
        name: "contributions"
    },
    {
        message: "Add test instructions (if applicable).",
        name: "test"
    },
    {
        type: 'list', name: 'license', message:'What Kind of License Do You Want To Use?', choices: ["MIT", "APACHE 2.0", "GPL 3.0", "BSD 3", "None"]
    },
    {
        message: "What is your GitHub username?",
        name: "github"
    },
    {
        message: "What is your email?",
        name: "email"
    }
];






// function to write README file
function writeToFile(fileName, data) {
    // console.log(data);
    fs.writeFile(fileName, data, (err) => {
        if (err) throw err;
        console.log('README Generated!');
      });
}

// function to initialize program
async function init() {
    // get user input to questions from array
    const answers = await inquirer.prompt(questions);
    // remove spaces from filename
    let fileName = answers.title.split(' ').join('');
    // define markdown var
    let markDown = generateMarkdown(answers);
    // create file function with args
    writeToFile(fileName + "_README.md", markDown)
};


// function call to initialize program
init();

