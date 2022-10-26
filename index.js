//Required class and packages
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");

const generateHTML =  require("./src/generate-html");

const fs = require("fs");
const inquirer = require("inquirer");
const { listenerCount } = require("process");

let isAddingEmployees = True;
const employees = [];

function pickEmployee(){
    if(isAddingEmployees){
        inquirer
            .prompt([
                {
                    type: 'list',
                    name: 'employeeRole',
                    message: 'Which role does this employee have',
                    choices: ["Engineer", "Intern", "none"]
                }
            ])
    }

    
}


const questions = [
    {
        type: 'list',
        message: 'What is the name of your team member'
        
    }
]

function init(){
    let id = 1;
    inquirer.prompt([
        {
            type: 'input',
            message: 'So your the manager. What is your name?',
            name: "name"
        },
        {
            type: 'input',
            message: 'What is your Employee ID?',
            name: "id"
        },
        {
            type: 'input',
            message: 'What is your Email Address?',
            name: "email"
        },
        {
            type: 'input',
            message: 'What is your Office Number?',
            name: "office"
        },
    ]);
}

init();