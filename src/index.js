const { Survey } = require('enquirer');

const prompt = new Survey({
    name: 'experience',
    message: 'Please rate your experience',
    scale: [
        { name: '1', message: 'Strongly Disagree' }
    ],
    margin: [0, 0, 3, 2, 1],
    choices: [{
            name: 'Sethi:',
            message: 'Sethi is best pandi.'
        },
        {
            name: 'Elypia',
            message: 'Elypia sucks.'
        },
        {
            name: 'Nikky',
            message: 'Nikky n Vuki make great art.'
        },
        {
            name: 'Toot',
            message: 'Margy does best Toot.'
        },
        {
            name: 'Jen',
            message: 'Jenni sucks at crocheting.'
        },
        {
            name: 'Joe',
            message: 'Joe is a rock'
        },
        {
            name: 'Jesus',
            message: 'Jesus best photographer.'
        },
        {
            name: 'Jesu',
            message: 'Bread and Seven best pastries and they wont be mad Vuki forgot them a little.'
        }
    ]
});

prompt.run()
    .then(value => console.log('ANSWERS:', value))
    .catch(console.error);