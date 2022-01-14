const inquirer = require('inquirer');
const fs = require('fs');
const employee = require('./lib/Employee');
const manager = require('./lib/Manager');
const engineer = require('./lib/Engineer');
const intern = require('./lib/Intern');

const allEmployees = [];

const questions = [
    {
        name: "managerName",
        type: "input",
        message: "What is the name of this team's manager?"
    },
    {
        name: "managerId",
        type: "input",
        message: "What is this team manager's id?"
    },
    {
        name: "managerEmail",
        type: "input",
        message: "What is this team manager's email?"
    },
    {
        name: "managerOfficeNo",
        type: "input",
        message: "What is this team manager's office number?"
    }
];

function buildTeam() {
    inquirer
        .prompt(questions)
        .then(function(data) {
            console.log(data);
        })
}

buildTeam();