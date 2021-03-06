'use strict';

const inquirer = require('inquirer');
const { Observable } = require('rxjs');

const observe = new Observable(obs => {
    obs.next({
        type: 'input',
        name: 'first name',
        message: 'What\'s your first name?',
    });
    obs.next({
        type: 'input',
        name: 'last name',
        message: 'What\'s your last name?',
        default: function() {
            return 'Doe';
        },
    });
    obs.next({
        type: 'input',
        name: 'phone',
        message: 'What\'s your phone number?',
        validate: function(value) {
            // /^([01]{1})?[-.\s]?\(?(\d{3})\)?[-.\s]?(\d{3})[-.\s]?(\d{4})\s?((?:#|ext\.?\s?|x\.?\s?){1}(?:\d+)?)?$/i
            var pass = value.match(
                /^([01]{1})?[-.\s]?\(?(\d{3})\)?[-.\s]?(\d{3})[-.\s]?(\d{4})\s?((?:#|ext\.?\s?|x\.?\s?){1}(?:\d+)?)?$/i
            )
            if (pass) {
                return true;
            }

            return 'Please enter a valid phone number';
        },
    });
    obs.complete();
});

inquirer.prompt(observe).then((answers) => {
    console.log(JSON.stringify(answers, null, '  '));
})
