const Manager = require("../lib/Manager");

describe("Manager", () => {

    const manager = new Manager("Joe", 1, "test@gmail.com", 0);

    it("Test if manager is an instance of Manager ", () => {
        expect(typeof(manager)).toEqual("object");
    });

    it("Test if getOfficeNum Returns 0", () => {
        expect(manager.getOfficeNum()).toEqual(0)
    });

    it("Test if getRole is overrid and prints 'Manager' ", () => {
        expect(manager.getRole()).toEqual("Manager")
    })

});