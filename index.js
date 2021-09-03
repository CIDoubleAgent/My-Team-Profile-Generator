const fs = require('fs');
const inquirer = require('inquirer');
const Manager = require("./lib/Manager");
const Employee = require("./lib/Employee");
const prompts = require('./lib/Prompts');
let teamProfileArray = [];

function executePrompts(prompts, callback) {
    return inquirer.prompt(prompts)
    .then(responseData => {
        callback(responseData)
    })
}

function handleManagerPrompts(promptData) {
    
    const { name, id, email, office, add_member } = promptData;
    const manager = new Manager (name, id, email, office);

    teamProfileArray.push(manager.getData());

    if (add_member === 'Yes') {
        executePrompts(prompts.employeePrompts, handleEmployeePrompts)
    } else {
        // TODO create index file
        writeTeamMembersToFie(teamProfileArray)
       
    }
}
function handleEmployeePrompts(promptData) {
    const { name, id, email, role, add_member, github, school } = promptData; 
    const employee = new Employee(name, id, email, role, github, school)

    teamProfileArray.push(employee.getData());

    if (add_member === 'Yes') {
        executePrompts(prompts.employeePrompts, handleEmployeePrompts)
    } else {
        // TODO create index file
        writeTeamMembersToFie(teamProfileArray)
    }
}
executePrompts(prompts.managerPrompt, handleManagerPrompts);


function writeTeamMembersToFie(teamArray) {
let html = ''

    html += `<head>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-KyZXEAg3QhqLMpG8r+8fhAXLRk2vvoC2f3B09zVXn8CA5QIVfZOJ3BCsw2P0p/We" crossorigin="anonymous">
    </head>`
    html += '<body>'
    teamArray.forEach((person) => {
        let office = person.office? person.office : ''
        let school = person.school? person.school : ''
        html += `
        <div class="team-member">
            ${person.name}<br>
            ${person.id}<br>
            ${person.email}<br>
            ${person.role}<br>
            ${school}<br>
            ${office}
        </div>
        `
    })
    html += '</body>'
    
    fs.writeFile("./dist/team.html", html, (err) => {
        console.log('File written!')
    })
}