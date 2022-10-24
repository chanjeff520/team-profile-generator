const Engineer = require("../lib/Engineer");

describe("Engineer", () => {

    const engi = new Engineer("Joe", 1, "test@gmail.com", "github.com");

    it("Test if engi is an instance of Engineer ", () => {
        expect(typeof(engi)).toEqual("object");
    });

    it("Test if getGitHub Returns 'github.com'", () => {
        expect(engi.getGitHub).toEqual("github.com")
    });

    it("Test if getRole is overrid and prints 'Engineer' ", () => {
        expect(engi.getRole()).toEqual("Engineer")
    })

});