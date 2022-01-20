const Manager = require('../lib/Manager');

describe("Manager", () => {
    
    const name = "Nick Edwards";
    const id = 123;
    const email = "nick@test.com";
    const officeNumber = 8008

    const testManager = new Manager(name, id, email, officeNumber);

    describe("getName", () => {
        it("should return the name", () => {
            expect(testManager.name).toBe(name);
        });
    });

    describe("getId", () => {
        it("should return the id", () => {
            expect(testManager.id).toBe(id);
        });
    });

    describe("getEmail", () => {
        it("should return the email", () => {
            expect(testManager.email).toBe(email);
        });
    });

    describe("getRole", () => {
        it("should return 'Engineer'", () => {
            expect(testManager.getRole()).toBe("Manager");
        });
    });

});