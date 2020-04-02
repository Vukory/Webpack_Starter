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
    }
];

const questions = [{
        type: 'list',
        name: 'category',
        message: 'Please select the category of earnings:',
        choices: choices
    },
    {
        type: 'input',
        message: 'Enter your income',
        name: 'income',
        validate: (value) => value.match(/^\d+(\.\d{0,2})?$/) ? true : '[ERROR] Please input a number value (00.00).'
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

console.log('Please input your earnings:');
inquirer.prompt(questions)
    .then((answers) => {

        console.log(answers);
        let income = Number(answers.income);
        let annualIncome;
        switch (answers.category) {
            case 0:
                annualIncome = income * 52;
                break;
            case 1:
                annualIncome = income * 12;
                break;
            case 2:
                annualIncome = income;
                break;
        }
        console.log('Your annual income is:', annualIncome);

        let result = tax(annualIncome);
        console.log('Annual tax paid:', result);

    })
    .catch(error => console.error(error));