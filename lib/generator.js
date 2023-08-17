//logoGnerator.js

//This file handles the generation of the logo
console.log('LogeGen has begun');

function renderShape(shape) {
    const shapes = {
        Circle: '<circle cx="150" cy="100" r="35%"',
        Triangle: '<polygon points="150, 18 244, 182 56, 182"',
        Square: '<rect x="75" y="25" width="50%" height="75%"'
    }
    return shapes[shape];
}

function logoGen(answers) {
    return `
<svg version="1.1"
        width="300" height="200"
        xmlns="http://www.w3.org/2000/svg">

    <rect width="100%" height="100%" fill="${answers.bg}" />

    ${renderShape(answers.shape)} fill="${answers.shapeCol}" />

    <text x="150" y="125" font-size="60" text-anchor="middle" fill="${answers.textCol}">${answers.text}</text>

</svg>
    `;
}

module.exports = logoGen;