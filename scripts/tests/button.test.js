const { TestScheduler } = require("jest");
const buttonClick= require("../button")

beforeEach(() => {
    document.body.innerHTML ="<p id='par'></p>"
});

describe("DOM testing", () =>{
    test("expext p content to be certain string",()=>{
        buttonClick();
        expect(document.getElementById("par").innerHTML).toEqual("you clicked")
    });
});