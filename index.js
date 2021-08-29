const fs = require('fs');
const inquirer = require('inquirer');

inquirer.prompt([
    {
    name: "managerName",
    type: "input",
    message: "Who is managing this team?"
    },
    
    {
    name: "managerId",
    type: "input",
    message: "What is the team managers employee ID?"
    },
    
    {
    name: "managerEmail",
    type: "input",
    message: "Please enter an email at which the team manager can be reached."
    },
    
    {
    name: "managerPhone",
    type: "input",
    message: "Please enter a contact phone number for the team manager"
    },

]);