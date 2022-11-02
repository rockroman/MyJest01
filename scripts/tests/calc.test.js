const addition = require("../calc")

describe("Calculator",() => {
    describe("Addition function", () =>{
        test("should return 42 for 20 + 22", () =>{
            expect(addition(20, 22)).toBe(42);
        })
        test("should return 17 for 12 + 5", () =>{
            expect(addition(12, 5)).toBe(17);
        })
        test("should throw Error for string + number", () =>{
            expect(()=>{
                addition("moj",5);
            }).toThrow();
        })
        test("should throw Error for number + string", () =>{
            expect(()=>{
                addition(5,"moj");
            }).toThrow();
        })
        test("should throw Error if there is no parameters given", () =>{
            expect(()=>{
                addition();
            }).toThrow();
        })


    });
    describe("Subtraction function", () =>{

    });
    describe("Multiply function", () =>{

    });
    describe("Division function", () =>{

    });

});