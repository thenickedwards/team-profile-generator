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

// * `getName()`
// * `getId()`
// * `getEmail()`
// * `getRole()`&mdash;returns `'Employee'`

// describe("Algo", () => {
//     describe("reverse", () => {
//       it("should reverse a given string", () => {
//         const str = "Hello World!";
//         const reversed = "!dlroW olleH";
  
//         const result = new Algo().reverse(str);
  
//         expect(result).toEqual(reversed);
//       });
//     });
  
//     describe("isPalindrome", () => {
//       it("should return true if a string is a palindrome", () => {
//         const str = "racecar";
  
//         const result = new Algo().isPalindrome(str);
  
//         expect(result).toEqual(true);
//       });
  
//       it("should return false if a string is not a palindrome", () => {
//         const str = "neon";
  
//         const result = new Algo().isPalindrome(str);
  
//         expect(result).toEqual(false);
//       });
//     });