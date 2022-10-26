//Required class and packages
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");

//generates the HTML for the employees
const generateHTML =  require("./src/generate-html");

//required modules
const fs = require("fs");
const inquirer = require("inquirer");
const { listenerCount } = require("process");

//used to add more employees
let isAddingEmployees = True;

//Where we store our employee's data
const employees = [];

//add the engineers and the interns. Keeps on adding until isAddingEmployees is false
function pickEmployee(){
    while(isAddingEmployees){
        inquirer
            .prompt([
                {
                    type: 'list',
                    name: 'employeeRole',
                    message: 'Which role does this employee have',
                    choices: ["Engineer", "Intern", "none"]
                }
            ])
            .then((answers) => {
                if(answers.employeeRole == "Engineer"){
                    engineerQuestions();
                }else if(answers.employeeRole == "Intern"){
                    internQuestions();
                }else{
                    isAddingEmployees = false;
                }
            })
    }

    
}

//prompt the user questions about engineer then add that engineer to the employee list
function engineerQuestions(){
    inquirer.prompt([
        {
            type: 'input',
            message: 'So your the Engineer. What is your name?',
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
            message: 'What is your GitHub account(provide a link)?',
            name: "GitHub"
        },
    ])
    .then((answers) => {
        const engineer = new Engineer(answers.name, answers.id, answers.email, answers.GitHub)

        employees.push(engineer);
    });
}

//prompt the user questions about intern then add that intern to the employee list
function internQuestions(){
    inquirer.prompt([
        {
            type: 'input',
            message: 'So your the intern. What is your name?',
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
            message: 'What school do you go to?',
            name: "school"
        },
    ])
    .then((answers) => {
        const intern = new Intern(answers.name, answers.id, answers.email, answers.school)

        employees.push(intern);
    });
}

function init(){
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
    ])
    .then((answers) => {
        const manager = new Manager(answers.name, answers.id, answers.email, answers.office)

        employees.push(manager);

        pickEmployee();
    });
}

init();