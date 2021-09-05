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
        
        writeTeamMembersToFile(teamProfileArray)
       
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
        writeTeamMembersToFile(teamProfileArray)
    }
}
executePrompts(prompts.managerPrompt, handleManagerPrompts);


function writeTeamMembersToFile(teamArray) {
    let html = ''

    html += `
<!DOCTYPE html>
<html lang="en-us">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />

        <link 
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css" 
        rel="stylesheet" 
        integrity="sha384-KyZXEAg3QhqLMpG8r+8fhAXLRk2vvoC2f3B09zVXn8CA5QIVfZOJ3BCsw2P0p/We" 
        crossorigin="anonymous">
            
        <link
        rel="stylesheet"
        href="https://use.fontawesome.com/releases/v5.10.0/css/all.css"
        integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p"
        crossorigin="anonymous"/>

        <title>My Team</title>
    </head>

    <body>
        <header class= "w-100 py-5 mb-5 bg-danger text-white text-center">
            <h1>My Team</h1>
        </header>

        <div class= "w-100 mb-5 d-flex justify-content-center">
            <section class= "d-flex flex-wrap justify-content-center" style= "max-width: 80%;">

            `

    teamArray.forEach((person) => {
        let office = person.office ? person.office : '';
        let github = person.github ? person.github : '';
        let school = person.school ? person.school : '';
        let roleType = '';

        if(person.office) {
            roleType = 'Office Number: ';
        } else if(person.github) {
            roleType = 'GitHub: ';
        } else if(person.school) {
            roleType = 'School: ';
        }

        html += `
            <div class= "card m-3 bg-light shadow-lg" style= "width: 18rem;">
                <h2 class= "ps-3 pt-2 mb-0 bg-primary text-white">${person.name}</h2>
                <h3 class= "ps-3 pt-2 pb-3 mb-0 bg-primary text-white">${person.role}</h3>
                <ul class="list-group px-3 py-5">
                    <li class="list-group-item">ID: ${person.id}</li>
                    <li class="list-group-item">Email: ${person.email}</li>
                    <li class="list-group-item">${roleType}${office}${github}${school}</li>
                </ul>
            </div>`
    })

    html += `
        </section>
        </div>

        <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.3/dist/umd/popper.min.js" 
        integrity="sha384-eMNCOe7tC1doHpGoWe/6oMVemdAVTMs2xqW4mwXrXsW0L84Iytr2wi5v2QjrP/xp" 
        crossorigin="anonymous"></script>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/js/bootstrap.min.js" 
        integrity="sha384-cn7l7gDp0eyniUwwAZgrzD06kc/tftFf19TOAs2zVinnD/C7E91j9yyk5//jjpt/" 
        crossorigin="anonymous"></script>
    </body>
</html>
`
    
    fs.writeFile("./dist/team.html", html, (err) => {
        console.log('File written!');
    })
}