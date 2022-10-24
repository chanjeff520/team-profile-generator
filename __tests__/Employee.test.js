
const Employee = require("../lib/Employee");


describe("Employee", () => {
    describle("Initialization", () => {
        
        const testEmployee = new Employee("testGuy", 0, "test@gmail.com")
        it("Should create an object of Employee", ()=>{

            expect(testEmployee).toEqual([]); //not sure if this works
        });

        it("Should create a new name in the within Employee object", () =>{

            expect(testEmployee.name).toEqual("testGuy");
        });

        it("Should create a new id number in the within Employee object", () =>{

            expect(testEmployee.id).toEqual(0);
        });

        it("Should create a new id number in the within Employee object", () =>{

            expect(testEmployee.email).toEqual("test@gmail.com");
        });

    });
    
})