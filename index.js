//index.js

// TODO: Include packages needed for this application
var fs = require('fs');
var inquirer = require('inquirer');
const generator = require('./lib/generator');

// TODO: Create a function to initialize app
function init() {}
//This is the collection of questions asked to the user.
inquirer
    .prompt([
        {
            type: 'input',
            message: 'What THREE letters should the logo incorporate?',
            name: 'text',
        },
        {
            type: 'input',
            message: 'What should the color of the text be? (You can enter a color by name, or as a hexadecimal code)',
            name: 'textCol',
        },
        {
            type: 'list',
            message: 'What shape should the logo be?',
            choices: ['Circle', 'Triangle', 'Square'],
            name: 'shape',
        },
        {
            type: 'input',
            message: 'What should the color of the shape be? (You can enter a color by name, or as a hexadecimal code)',
            name: 'shapeCol',
        },
        {
            type: 'input',
            message: 'What should the background color be? (Leave blank for black)',
            name: 'bg',
        },
        {
            type: 'input',
            message: 'What should the name of the file be?',
            name: 'fn',
        },
        
    ])
    .then((answers) => {
        if (answers.fn === '') {
            answers.fn = 'logo';
        }
        //The answers given to each question above is passed to the generateMarkdown file to be processed.
        console.log('creating file. . .');
        console.log(answers);
        const logoGen = generator(answers);
        fs.writeFile(`./examples/${answers.fn}.svg`, logoGen, (err) => {
            if (err) {
              console.log('UH OH! There was an error creating the file!\n');
              console.log('Error: ' + err);
            } else {
              console.log('The file was created successfully!');
            };
        });
    })
    .catch((error) => {
        if (error.isTtyError) {
            // Prompt couldn't be rendered in the current environment
        } else {
            // Something else went wrong
        }
    });
// Function call to initialize app
init();