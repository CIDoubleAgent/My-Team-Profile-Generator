const Employee = require('./Employee');

class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email)

        this.school = school;
    }

    getName() {
        return this.name;
    }

    getRole() {
        return "Intern";
    }
    
    getId() {
        return this.id;
    }
    
    getEmail() {
        return this.email;
    }
    
    getSchool() {
        return this.school;
    }

    getData() {
        return {
            name: this.getName(),
            role: this.getRole(),
            id: this.getId(),
            email: this.getEmail(),
            school: this.getSchool()

        }
    }
}
module.exports = Intern;