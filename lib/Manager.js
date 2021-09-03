const Employee = require('./Employee');

class Manager extends Employee {
    constructor(name, id, email, office) {
        super(name, id, email)

        this.office = office;
    }

    getName() {
        return this.name;
    }

    getRole() {
        return "Manager";
    }

    getOffice() {
        return this.office;
    }

    getId() {
        return this.id;
    }

    getEmail() {
        return this.email;
    }

    getData() {
        return {
            id: this.getId(),
            name: this.getName(),
            email: this.getEmail(),
            office: this.getOffice(),
            role: this.getRole()

        }
    }
}
module.exports = Manager;