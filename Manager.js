const Employee = require('./Employee');

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        this.name = name;
        this.id = id;
        this.email = email;

        super(name, id, email, officeNumber);
        this.officeNumber = officeNumber;
    }
    
    getRole() {
        return `Manager`;
    }
}