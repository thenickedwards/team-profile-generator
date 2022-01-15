// Libraries
const inquirer = require('inquirer');
const fs = require('fs');

// Superclass
const employee = require('./lib/Employee.js')

// Subclasses
const manager = require('./lib/Manager.js');
const engineer = require('./lib/Engineer.js');
const intern = require('./lib/Intern.js')

const allEmployees = [];

// Questions Arrays for Inquirer
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

const engineerQuestions = [
    {
        name: "engineerName",
        type: "input",
        message: "What is the name of this engineer?"
    },
    {
        name: "engineerId",
        type: "input",
        message: "What is this engineer's id?"
    },
    {
        name: "engineerEmail",
        type: "input",
        message: "What is this engineer's email?"
    },
    {
        name: "engineerGithub",
        type: "input",
        message: "What is this engineer's GitHub username?"
    }
];

const internQuestions = [
    {
        name: "internName",
        type: "input",
        message: "What is the name of this intern?"
    },
    {
        name: "internId",
        type: "input",
        message: "What is this intern's id?"
    },
    {
        name: "internEmail",
        type: "input",
        message: "What is this intern's email?"
    },
    {
        name: "internSchool",
        type: "input",
        message: "What school is this intern attending?"
    }
];

// Begin by creating manager (one per team)
function createManager() {
    inquirer
        .prompt(managerQuestions)
        .then(function(data) {
            // console.log(data);
            allEmployees.push(data);
            // console.log("Below is the allEmployees array.")
            // console.log(allEmployees);
            createTeamMember();
        })
}

// Create additional team members or generate My Team page
async function createTeamMember() {
    const response = await inquirer
    .prompt([{
            name: "continue",
            type: "list",
            message: "Which sort of team member would you like to add?",
            choices: ["Engineer", "Intern", "I'm done! No more team members to add."]
        }])

    if (response.continue == 'Engineer') {
        inquirer
            .prompt(engineerQuestions)
            .then(function(data) {
                // console.log(data);
                allEmployees.push(data);
                // console.log("Below is the allEmployees array.")
                // console.log(allEmployees);
                createTeamMember();
        })
    } if (response.continue == 'Intern') {
        inquirer
            .prompt(internQuestions)
            .then(function(data) {
                // console.log(data);
                allEmployees.push(data);
                // console.log("Below is the allEmployees array.")
                // console.log(allEmployees);
                createTeamMember();
        })
    } else {
        console.log("We're all done!");
        // if no, writeFile
    }
}

createManager();

// src folder (page-template.js: generate team function, writeFile, returns html to index.js)
// dist folder holds rendered html (create/append team.html, hardcoded team.css)


// create sample_myteam.html and sample_myteam.html as template for JS
// writeFile function in myteampage-template.js
// write tests