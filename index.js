// Libraries
const inquirer = require('inquirer');
const fs = require('fs');
const generateMyTeamPage = require('./src/generateMyTeamPage')

// Superclass
const Employee = require('./lib/Employee.js');

// Subclasses
const Manager = require('./lib/Manager.js');
const Engineer = require('./lib/Engineer.js');
const Intern = require('./lib/Intern.js');

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
            const newManager = new Manager(data.managerName, data.managerId, data.managerEmail, data.managerOfficeNo);
            allEmployees.push(newManager);
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
                const newEngineer = new Engineer(data.engineerName, data.engineerId, data.engineerEmail, data.engineerGithub);
                allEmployees.push(newEngineer);
                // console.log("Below is the allEmployees array.")
                // console.log(allEmployees);
                createTeamMember();
        })
    } else if (response.continue == 'Intern') {
        inquirer
            .prompt(internQuestions)
            .then(function(data) {
                // console.log(data);
                const newIntern = new Intern(data.internName, data.internId, data.internEmail, data.internSchool);
                allEmployees.push(newIntern);
                // console.log("Below is the allEmployees array.")
                // console.log(allEmployees);
                createTeamMember();
        })
    } else {
        // If no more team members, write html
        console.log("Thatnks for providing the info of your team!");
        // console.log("Below is the allEmployees array.")
        // console.log(allEmployees);
        const fullHtml = generateMyTeamPage(allEmployees);
        console.log("Generating My Team page...")
        createNewHTML("./dist/myteam.html", fullHtml);
    }
}

// To create HTML file
function createNewHTML(fileName, data) {
    console.log("createHTML is running!");
    fs.writeFile(fileName, data, (err) =>
    err ? console.error(err) : console.log('My Team page generated! Check the "dist" folder and enjoy!'))
}


createManager();