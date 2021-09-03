const fs = require('fs');
const inquirer = require('inquirer');
const Manager = require("./lib/Manager");
const managerPrompts = require('./lib/Prompts');

function executePrompts(prompts, callback) {
    return inquirer.prompt(prompts)
    .then(responseData => {
        callback(responseData)
    })
}

function handleManagerPrompts(promptData) {
    let teamProfileArray = [];
    const { name, id, email, office, add_member } = promptData;
    const manager = new Manager (name, id, email, office);

    teamProfileArray.push(manager.getData());

    if (add_member === 'Yes') {

    }
}

executePrompts(managerPrompts, handleManagerPrompts);




