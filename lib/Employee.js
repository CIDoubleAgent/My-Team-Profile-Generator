class Employee {
    constructor (name, id, email) {
        
        this.name = name;
        this.id = id;
        this.email = email;
    }

    getName () {
        return this.name;
    }

    getId () {
        return this.id;
    }

    getEmail () {
        return this.email;
    }  
    
    getData() {
        return {
            name: this.getName(),
            id: this.getId(),
            email: this.getEmail(),

        }
    }
}

module.exports = Employee;