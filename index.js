const inquirer = require("inquirer");
const fs = require("fs");

// array of questions for user
const questions = [
    {
        message: "What is your app's name?",
        name: "name",
        default: "Good Read Me Generator"
    },

    {
        message: "Enter a short description for your app.",
        name: "description",
        default: "The greatest app in the world."

    },

    { message: "What comman to type for installation?",
      name: "installation",
      default: "npm install"
},

{     message: "What is the purpose of the app?",
      name: "usage",
      default: "default"
},

    {
      message: "What license are you going to use?",
      name: "license",
      default: "default"
},

{
      message: "What are you contributing?",
      name: "contribution",
      default: "default"

},

{
      message: "What test are you using?",
      name: "questions",
      default: "question"
},

];



// function to write README file
function writeToFile(fileName, data) {

}



// function to initialize program
function init() {

    inquirer.prompt(questions).then(data => {
        const readmeTemplate = `
# ${data.name}

## Description
${data.description}

## Table of Contents
* [Description](## Description)
* [Installation] (## Installation)
* [Usage] (## Usage)
* [License] (## License)
* [Contributing] (## Contributing)
* [Tests] (## Tests)
* [Questions] (## Questions)

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
${data.questions}
