const fs = require('fs');
const inquirer = require('inquirer');

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
        const 
    })

    
}

managerQuestions();

