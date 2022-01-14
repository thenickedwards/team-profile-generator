const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(name, id, email, officeNumber) {
        this.name = name;
        this.id = id;
        this.email = email;

        super(name, id, email, github);
        this.github = github;
    }

    getRole() {
        return `Engineer`;
    }

    getGithub() {
        return this.github;
    }
}