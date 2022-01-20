const Intern = require('../lib/Intern');

describe("Intern", () => {
    
    const name = "Nick Edwards";
    const id = 123;
    const email = "nick@test.com";
    const school = "WWU"

    const testIntern = new Intern(name, id, email, school)

    describe("getName", () => {
        it("should return the name", () => {
            expect(testIntern.name).toBe(name);
        });
    });

    describe("getId", () => {
        it("should return the id", () => {
            expect(testIntern.id).toBe(id);
        });
    });

    describe("getEmail", () => {
        it("should return the email", () => {
            expect(testIntern.email).toBe(email);
        });
    });

    describe("getRole", () => {
        it("should return 'Intern'", () => {
            expect(testIntern.getRole()).toBe("Intern");
        });
    });

    describe("getSchool", () => {
        it("should return name of school", () => {
            expect(testIntern.getSchool()).toBe(school);
        });
    });

});