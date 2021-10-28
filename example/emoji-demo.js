'use strict';

const inquirer = require('inquirer');
const inquirerEmoji = require('inquirer-emoji');

// register emoji
inquirer.registerPrompt('emoji', inquirerEmoji);

const questions = [
    {
        type: 'emoji',
        name: 'spirit_animal',
        message: 'Find your spirit animal emoji:',
    }
]

inquirer.prompt(questions).then((answers) => {
    console.log(JSON.stringify(answers, null, '  '));
});

