
function Employee(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
}

//changes elements within the employee
Employee.prototype.changeName = function (newName) {
    this.name = newName;
}
Employee.prototype.changeName = function (newId) {
    this.id = newId;
}
Employee.prototype.changeName = function (newEmail) {
    this.email = newEmail;
}

//get elements
Employee.prototype.getName = function () {
    return this.name;
}
Employee.prototype.getId = function () {
    return this.id;
}
Employee.prototype.getEmail = function () {
    return this.email;
}