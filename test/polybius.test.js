// Write your tests here!
const expect = require("chai").expect;
const polybiusModule = require("../src/polybius");

describe("polybiusModule", () => {
  it("checks if the polybius function exists", () => {
    expect(polybiusModule).to.exist;
  });
  it("It translates the letters i and j to 42", () => {
    const actualA = polybiusModule.polybius("i", true);
    const actualB = polybiusModule.polybius("j", true);
    expect(actualA).to.equal("42");
    expect(actualB).to.equal("42");
  });
  it("makes sure 42 translates to (i/j)", () => {
    const actual = polybiusModule.polybius("42", false);
    expect(actual).to.equal("(i/j)");
  });
  it("capital letters will be ignored", () => {
    const actualA = polybiusModule.polybius("thinkful", true);
    const actualB = polybiusModule.polybius("THINKFUL", true);
    expect(actualA).to.equal("4432423352125413");
    expect(actualB).to.equal("4432423352125413");
  });
  it("spaces are taken into account, before and after encoding or decoding.", () => {
    const actualA = polybiusModule.polybius("4432423352 125413", false);
    const actualB = polybiusModule.polybius("think ful", true);
    expect(actualA).to.equal("th(i/j)nk ful");
    expect(actualB).to.equal("4432423352 125413");
  });
  it("returns false if characters are not an even amount of numbers (not including spaces)", () => {
    const actual = polybiusModule.polybius("1", false);
    expect(actual).to.be.false;
  });
});
