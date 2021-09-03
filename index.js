const fs = require('fs');
const inquirer = require('inquirer');
const Manager = require("./lib/Manager");

let teamProfileArray = [];

const managerQuestions = () => {
    return inquirer.prompt([
    
        {
            name: "name",
            type: "input",
            message: "Who is managing this team?"
        },
        
        {
            name: "id",
            type: "input",
            message: "What is the team managers employee ID?"
        },
        
        {
            name: "email",
            type: "input",
            message: "Please enter an email at which the team manager can be reached."
        },
        
        {
            name: "office",
            type: "input",
            message: "Please enter the team manager's office number."
        },

        {
            name: "add member",
            type: "checkbox",
            choices: ["Yes", "No"]
        }
    
    ])

    .then(managerData => {
        const { name, id, email, office } = managerData;
        const manager = new Manager (name, id, email, office);
        teamProfileArray.push(manager);
        console.log(manager);
    })

    
}

managerQuestions();

