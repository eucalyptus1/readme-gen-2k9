// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');


// TODO: Create an array of questions for user input
const questions = () => {
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
          console.log('The project must have a name');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'description',
      message: 'Provide a description of the project (required)',
      validate: descInput => {
        if (descInput) {
          return true;
        } else {
          console.log('Please provide a description!');
          return false;
        }
      }
    },
    {
      type: 'checkbox',
      name: 'languages',
      message: 'What did you build this project with? (Check all that apply)',
      choices: ['JavaScript', 'HTML', 'CSS', 'ES6', 'jQuery', 'Bootstrap', 'Node']
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
      message: 'Select any license that applies to this project (optional)'
    },
    {
      type: 'input',
      name: 'contributing',
      message: 'Detail how to contribute to this project (optional)'
    },
    {
      type: 'input',
      name: 'tests',
      message: 'Provide instructions for testing or any examples of tests (optional)'
    },
    {
      type: 'input',
      name: 'email',
      message: 'Enter your email address. (Required)',
      validate: emailInput => {
        if (emailInput) {
          return true;
        } else {
          console.log('Please enter your name!');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'git',
      message: 'Enter the link to your GitHub profile. (Required)',
      validate: gitInput => {
        if (gitInput) {
          return true;
        } else {
          console.log('Please enter your name!');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'repo',
      message: 'Enter the link to the GitHub repository for this project. (optional)',
    }

  ]);
};



// TODO: Create a function to write README file
// const writeFile = answers => {
//   return new Promise((resolve, reject) => {
//     fs.writeFile('./dist/readme.md', answers, err => {
//       if (err) {
//         reject(err);
//       }
//       resolve({
//         ok: true,
//         message: 'Your Readme has been created!'
//       });
//     });
//   });
// }

const writeFile = data => {
  fs.writeFile('./dist/readme.md', data, err => {
      if (err) {
          console.log(err);
          return;
      } else {
          console.log("Your Readme has been created!")
      }
  })
}; 

// TODO: Create a function to initialize app

// Function call to initialize app
questions().then(crap => {
  return generateMarkdown(crap);
})
  .then(data => {
    return writeFile(data);
  })
  .catch(err => {
    console.log(err)
  })