const addition = require("../calc")

describe("Calculator",() => {
    describe("Addition function", () =>{
        test("should return 42 for 20 + 22", () =>{
            expect(addition(20, 22)).toBe(42);
        })
        test("should return 17 for 12 + 5", () =>{
            expect(addition(12, 5)).toBe(17);
        })


    });
    describe("Subtraction function", () =>{

    });
    describe("Multiply function", () =>{

    });
    describe("Division function", () =>{

    });

});