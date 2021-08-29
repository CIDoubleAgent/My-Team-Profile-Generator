const Employee = require('./Employee');

class Manager extends Employee {
    constructor(name, id, email, office) {
        super(name, id, email);

        this.office = office;
    }

    get role () {
        return this.role;
    }

    set role () {
        return "Manager";
    }
}

module.exports = Manager;