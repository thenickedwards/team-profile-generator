const inquirer = require('inquirer');
const fs = require('fs');
const employee = require('./lib/Employee.js')
const manager = require('./lib/Manager.js');
const engineer = require('./lib/Engineer.js');
const intern = require('./lib/Intern.js')

const allEmployees = [];

const managerQuestions = [
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

function createManager() {
    inquirer
        .prompt(managerQuestions)
        .then(function(data) {
            console.log(data);
            allEmployees.push(data);
            console.log(allEmployees);
            createTeamMember();
        })
        // push mgr to allEmp array
        // createTeamMember();
}

function createTeamMember() {
    console.log("createTeamMember is running!")
    // Inq prompt do you want to add a TM
    // else, collect data
    // push to array
    // if no, writeFile
}

createManager();

// src folder (page-template.js: generate team function, writeFile, returns html to index.js)
// dist folder holds rendered html (create/append team.html, hardcoded team.css)