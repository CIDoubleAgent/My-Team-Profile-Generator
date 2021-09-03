const managerPrompt = [
        
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

module.exports = managerPrompt;