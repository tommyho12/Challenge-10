//index.js

// TODO: Include packages needed for this application
var fs = require('fs');
var inquirer = require('inquirer');
const generator = require('./lib/logoGenerator');

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
    