// Write your tests here!
const expect = require("chai").expect;
const caesarModule = require("../src/caesar");


describe("caesarModule", () => {
  it("decodes messages even if encode argument is false", () => {
    const expected = "thinkful";
    const actual = caesarModule.caesar("wklqnixo", 3, false);
    expect(actual).to.equal(expected);
  });
  it("returns message even if capital letters entered", () => {
    const expected = "wklqnixo";
    const actual = caesarModule.caesar("THINKFUL", 3);
    expect(actual).to.equal(expected);
  });
  it("will successfully shift before the beginning of the alphabet", () => {
    const expected = "z";
    const actual = caesarModule.caesar("a", -1);
    expect(actual).to.equal(expected);
  });
  it("will successfully shift past the end of the alphabet", () => {
    const expected = "a";
    const actual = caesarModule.caesar("z", 1);
    expect(actual).to.equal(expected);
  });
  it("will account for spaces and other symbols and keep them in message, before and after", () => {
    const expected = "! @ # $ % ^ & * ) - ( + = / ? < >";
    const actual = caesarModule.caesar("! @ # $ % ^ & * ) - ( + = / ? < >", -3);
    expect(actual).to.equal(expected);
  });
  it("returns false if the shift value is equal to 0", () => {
    const actual = caesarModule.caesar("test", 0);
    expect(actual).to.be.false;
  });
  it("returns false if the shift value is less than -25", () => {
    const actual = caesarModule.caesar("test", -26);
    expect(actual).to.be.false;
  });
  it("returns false if the shift value is greater than 25", () => {
    const actual = caesarModule.caesar("test", 26);
    expect(actual).to.be.false;
  });
  it("if the shift value is equal to 1", () => {
    const expected = "b";
    const actual = caesarModule.caesar("a", 1);
    expect(actual).to.equal(expected);
  });
  it("if the shift value is equal to 2", () => {
    const expected = "c";
    const actual = caesarModule.caesar("a", 2);
    expect(actual).to.equal(expected);
  });
});

