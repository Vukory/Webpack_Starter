const inquirer = require('inquirer');

const choices = [{
        name: 'Weekly',
        value: 0
    },
    {
        name: 'Monthly',
        value: 1
    },
    {
        name: 'Annualy',
        value: 2
    },

];

const questions = [{
        type: 'list',
        name: 'category',
        message: 'Please select the cathegory of earnings:',
        choices: choices
    },
    {
        type: 'number',
        message: 'Enter you income',
        name: 'income',
        validate: (value) => !Number.isNaN(value)
    }
];


function tax(paidValue) {
    let taxCalc = 0;
    let remainingToBeTaxed = paidValue;

    if (remainingToBeTaxed > 150000) {
        taxCalc += 0.45 * (remainingToBeTaxed - 150000);
        remainingToBeTaxed = 150000;
    }

    if (remainingToBeTaxed > 50000) {
        taxCalc += 0.4 * (remainingToBeTaxed - 50000);
        remainingToBeTaxed = 50000;
    }

    if (remainingToBeTaxed > 12500) {
        taxCalc += 0.2 * (remainingToBeTaxed - 12500);
    }

    return taxCalc;
}

// var value_input = parseFloat(prompt("Paid: "));
// console.log("Tax: " + tax(value_input));

console.log('Please input your earnings:');
inquirer.prompt(questions)
    .then(answers => console.log(answers))
    .catch(error => console.error(error));