// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.name}

  ## Description
  ${data.description}
  
  ## Table of Contents
  * [Built with](#languages)
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)
  * [Website](#repo)
  
  ## Built with
  ${data.languages}
  
  ## Installation 
  ${data.installation}
 
  ## Usage 
  ${data.usage}

  ## License 
  ${data.license}
  
  ## Contributing 
  ${data.contributing}
  
  ## Tests
  ${data.tests}
  
  ## Questions
  For any questions about this project, email me at ${data.email} or at my Github ${data.git}

  ## Website
  ${data.repo}
  
`;
}

module.exports = generateMarkdown;
