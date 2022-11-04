/**
 * @jest-environment jsdom
 */
const { TestScheduler } = require("jest");
const buttonClick= require("../button")

beforeEach(() => {
    let fs = require("fs");
    let fileContents = fs.readFileSync("index.html","utf-8");
    document.write(fileContents);
    document.close();
    
});

describe("DOM testing", () =>{
    test("expext p content to be certain string",()=>{
        buttonClick();
        expect(document.getElementById("par").innerHTML).toEqual("you clicked")
    });
    test("h1 should exist", () =>{
        expect(document.getElementsByTagName("h1").length).toBe(1)
    });
});
