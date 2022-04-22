// TODO: Include packages needed for this application

const inquirer = require('inquirer');
// const fs = require('fs');

// const generateMarkdown = require('./utils/generateMarkdown');


// TODO: Create an array of questions for user input
const questions = data => {
  console.log(`
=================
  ReadmeGen-2k9
=================
`);
  return inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is the name of your project? (required)',
      validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log('Please enter your name!');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'description',
      message: 'Provide a description of the project (required)'
    },
    {
      type: 'input',
      name: 'installation',
      message: 'Provide any intructions for installation, if applicable'
    },
    {
      type: 'input',
      name: 'usage',
      message: 'Provide instructions and examples on the use of your project'
    },
    {
      type: 'input',
      name: 'license',
      message: ''
    },
    {
      type: 'input',
      name: 'contributing',
      message: ''
    },
    {
      type: 'input',
      name: 'tests',
      message: 'Provide instructions for testing or any examples of tests (optional)'
    },
    {
      type: 'input',
      name: 'email',
      message: 'Enter your email address. (Required)'
    },
    {
      type: 'input',
      name: 'git',
      message: 'Enter the link to your GitHub profile. (Required)'
    },
  
  ]);
};

questions().then(answers => console.log(answers));

// TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// // TODO: Create a function to initialize app
// function init() {}

// // Function call to initialize app
// init();