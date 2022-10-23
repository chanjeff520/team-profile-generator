/*
function Employee(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
}

//get elements from within employees
Employee.prototype.getName = function(){
    return this.name;
}
Employee.prototype.getId = function(){
    return this.id;
}
Employee.prototype.getEmail = function(){
    return this.email;
}
Employee.prototype.getRole = function(){
    return "Employee"
}

module.exports = Employee;

*/


module.exports = class Employee{
    constructor(name, id, email){
        this.name = name;
        this.id = id;
        this.email = email;
    }
    getName(){
        return this.name;
    }
    getId(){
        return this.id;
    }
    getEmail(){
        return this.email;
    }
    getRole(){
        return "Employee"
    }
}

