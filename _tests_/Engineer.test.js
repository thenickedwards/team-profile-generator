const Engineer = require('../lib/Engineer');

describe("Engineer", () => {
    
    const name = "Nick Edwards";
    const id = 123;
    const email = "nick@test.com";
    const github = "nick_gh"

    const testEngineer = new Engineer(name, id, email, github);

    describe("getName", () => {
        it("should return the name", () => {
            expect(testEngineer.name).toBe(name);
        });
    });

    describe("getId", () => {
        it("should return the id", () => {
            expect(testEngineer.id).toBe(id);
        });
    });

    describe("getEmail", () => {
        it("should return the email", () => {
            expect(testEngineer.email).toBe(email);
        });
    });

    describe("getRole", () => {
        it("should return 'Engineer'", () => {
            expect(testEngineer.getRole()).toBe("Engineer");
        });
    });

    describe("getGithub", () => {
        it("should return GitHub username", () => {
            expect(testEngineer.getGithub()).toBe(github);
        });
    });

});