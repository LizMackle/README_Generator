// Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown.js");

// Create an array of questions for user input
const questions = [
    {
        message: "What is the title of your project?",
        type: "input",
        name: "title",
    },
    {
        message: "Please provide a description of your project",
        type: "input",
        name: "description",
    },
    {
        message: "Please provide installation instructions for your project",
        type: "input",
        name: "installation",
    },
    {
        message: "What usage information can you provide for your project?",
        type: "input",
        name: "usage",
    },
    {
        message: "What are the contribution guidelines for your project?",
        type: "input",
        name: "contribution",
    },
    {
        message: "What license would you like to use?",
        type: "list",
        name: "license",
        choices: [
            "MIT",
            "Unlicensed",
            "Mozilla",
            "Eclipse",
            "GPL",
        ],
    },
    {
        message: "What are the test instructions?",
        type: "input",
        name: "test",
    },
    {
        message: "What is your Github username?",
        type: "input",
        name: "github",
    },
    {
        message: "What is your email address?",
        type: "input",
        name: "email",
    },
];


// Create a function to initialize app & create README
function init() {
    inquirer.prompt(questions)
        .then((data) => fs.writeFile('README.md', generateMarkdown(data), (err) =>
            err ? console.error(err) : console.log('Your README has been generated!')
        ))
}

// Function call to initialize app
init();


