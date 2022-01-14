const Employee = require('./lib/Employee');

class Intern extends Employee {
    constructor(name, id, email, officeNumber) {
        this.name = name;
        this.id = id;
        this.email = email;

        super(name, id, email, school);
        this.school = school;
    }

    getRole() {
        return `Intern`;
    }

    getSchool() {
        return this.school;
    }
}

module.exports = Intern;