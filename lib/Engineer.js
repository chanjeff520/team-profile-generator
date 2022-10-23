// import Employee
const Employee = require("./Employee");

/*
function Engineer(name,id,email,github){
    this.name = name;
    this.id = id;
    this.email = email;
    this.github = github;
}
*/


module.exports = class Engineer extends Employee{
    constructor (name, id, email, github){
        super(name, id, email);
        this.github = github;
    }

    getGitHub(){
        return this.github;
    }
    getRole(){
        return "Engineer"
    }
}
