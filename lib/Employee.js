class Employee {
    constructor (name, id, email, role, github, school) {
        
        this.name = name;
        this.role = role;
        this.id = id;
        this.email = email;
        this.github = github;
        this.school = school;
    }

    getName () {
        return this.name;
    }

    getRole () {
        return this.role
    }

    getId () {
        return this.id;
    }

    getEmail () {
        return this.email;
    }  
    
    getData() {
        return {
            id: this.getId(),
            name: this.getName(),
            email: this.getEmail(),
            role: this.getRole(),
            github: this.github,
            school: this.school
        }
    }
}

module.exports = Employee;