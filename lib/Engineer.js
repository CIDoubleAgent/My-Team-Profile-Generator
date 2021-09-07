const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email)

        this.github = github;
    }

    getName() {
        return this.name;
    }

    getRole() {
        return "Engineer";
    }
    
    getId() {
        return this.id;
    }
    
    getEmail() {
        return this.email;
    }
    
    getGithub() {
        return this.github;
    }

    getData() {
        return {
            name: this.getName(),
            role: this.getRole(),
            id: this.getId(),
            email: this.getEmail(),
            github: this.getGithub()

        }
    }
}
module.exports = Engineer;