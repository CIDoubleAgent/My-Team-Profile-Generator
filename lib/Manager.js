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
    
    getId() {
        return this.id;
    }
    
    getEmail() {
        return this.email;
    }
    
        getOffice() {
            return this.office;
        }

    getData() {
        return {
            name: this.getName(),
            role: this.getRole(),
            id: this.getId(),
            email: this.getEmail(),
            office: this.getOffice()

        }
    }
}
module.exports = Manager;