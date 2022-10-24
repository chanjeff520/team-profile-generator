const Intern = require("../lib/Intern");

describe("Engineer", () => {

    const student = new Intern("Joe", 1, "test@gmail.com", "UC Berk");

    it("Test if student is an instance of Intern ", () => {
        expect(typeof(student)).toEqual("object");
    });

    it("Test if School Returns 'github.com'", () => {
        expect(student.getSchool()).toEqual("UC Berk")
    });

    it("Test if getRole is overrid and prints 'Intern' ", () => {
        expect(student.getRole()).toEqual("Intern")
    })

});