const inquirer = require('inquirer');

const choices = [{
        name: 'Strongly Disagree',
        value: 0
    },
    {
        name: 'Disagree',
        value: 1
    },
    {
        name: 'Neutral',
        value: 2
    },
    {
        name: 'Agree',
        value: 3
    },
    {
        name: 'Strongly Agree',
        value: 4
    }
];

const questions = [{
        type: 'list',
        name: 'seth',
        message: 'Sethi is best pandi.',
        choices: choices
    },
    {
        type: 'list',
        name: 'elypia',
        message: 'Elypia sucks.',
        choices: choices
    },
    {
        type: 'list',
        name: 'nikky',
        message: 'Nikky n Vuki make great art.',
        choices: choices
    },
    {
        type: 'list',
        name: 'toot',
        message: 'Margy does best Toot.',
        choices: choices
    },
    {
        type: 'list',
        name: 'jen',
        message: 'Jenni sucks at crocheting.',
        choices: choices
    },
    {
        type: 'list',
        name: 'joe',
        message: 'Joe is a rock',
        choices: choices
    },
    {
        type: 'list',
        name: 'jesus',
        message: 'Jesus best photographer.',
        choices: choices
    },
    {
        type: 'list',
        name: 'jesu',
        message: 'Bread and Seven best pastries and they wont be mad Vuki forgot them a little.',
        choices: choices
    }
];

console.log('Please rate your experience');

inquirer.prompt(questions)
    .then(answers => console.log(answers))
    .catch(error => console.error(error));