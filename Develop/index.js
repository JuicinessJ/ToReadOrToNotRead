// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
const { writeFile } = require('fs');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What would you like the title to be?',
    },
    {
        type: 'input',
        name: 'descriptions',
        message: 'What would you like your description to say?',
    },
    {
        type: 'input',
        name: 'install',
        message: 'What would the installation guide be?',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'What is the point of this app?',
    },
    {
        type: 'list',
        name: 'license',
        message: 'What license would you want for this app?',
        choices: ['MIT', 'Apache', 'GPL', 'BSD'],
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'Who will you like to give credit for contributing to this app?',
    },
    {
        type: 'input',
        name: 'test',
        message: 'Does this app include any test?',
    },
    {
        type: 'input',
        name: 'user',
        message: 'What is your username for Github?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email?',
    },
];

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then((answer) => writeFile('readme.md', generateMarkdown(answer),((err) => console.error(err))))
    .then(() => console.log('Successfully wrote readme.md'))
    .catch((err) => console.error(err));
}

// Function call to initialize app
init();
