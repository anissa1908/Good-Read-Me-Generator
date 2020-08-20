const inquirer = require("inquirer");
const fs = require("fs");

// array of questions for user
const questions = [
    {
        message: "What is your app's name?",
        name: "title",
        default: "Good Read Me Generator"
    },

    {
        message: "Enter a short description for your app.",
        name: "description",
        default: "The greatest app in the world."

    },

    { message: "What command to type for installation?",
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
      message: "What is your Github email address?",
      name: "contributing",
      default: "default"

},

{
      message: "Where can you reach me with questions?",
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

        `
        fs.writeFile("ProjectReadMe.md", readmeTemplate , err=> console.log(err || "Success!"))
    })
}

// function call to initialize program
init();