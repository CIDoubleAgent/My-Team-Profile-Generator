exports.managerPrompt = [  
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
        name: "add_member",
        type: "list",
        message: "Would you like to add a team member?",
        choices: ["Yes", "No"]
    }
    
]

exports.employeePrompts = [
    {
        name: "role",
        type: "list",
        message: "What kind of employee are you adding?",
        choices: ["Engineer", "Intern"]
    },
    {
        name: "name",
        type: "input",
        message: "What is this employee's name?"
    },
    {
        name: "id",
        type: "input",
        message: "What is the employee ID?"
    },
    {
        name: "email",
        type: "input",
        message: "Please enter an email at which the employee can be reached."
    },
    {
        name: "github",
        type: "input",
        message: "Please enter the employee's github profile.",
        when: function(answers) {
            return answers.role === "Engineer" ? true : false
        }
    },
    {
        name: "school",
        type: "input",
        message: "What school does the employee attend?",
        when: function(answers) {
            return answers.role === "Intern" ? true : false
        }
    },
    {
        name: "add_member",
        type: "list",
        message: "Would you like to add a team member?",
        choices: ["Yes", "No"]
    }
    

]