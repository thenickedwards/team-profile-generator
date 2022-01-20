const Employee = require('../lib/Employee');

describe("Employee", () => {
    
    const name = "Nick Edwards";
    const id = 123;
    const email = "nick@test.com";

    const testEmployee = new Employee(name, id, email);

    describe("getName", () => {
        it("should return the name", () => {
            expect(testEmployee.name).toBe(name);
        });
    });

    describe("getId", () => {
        it("should return the id", () => {
            expect(testEmployee.id).toBe(id);
        });
    });

    describe("getEmail", () => {
        it("should return the email", () => {
            expect(testEmployee.email).toBe(email);
        });
    });

    describe("getRole", () => {
        it("should return 'Employee'", () => {
            expect(testEmployee.getRole()).toBe("Employee");
        });
    });

});