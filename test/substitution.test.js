// Write your tests here!
const expect = require("chai").expect;
const substitutionModule = require("../src/substitution");
const substitution = require("../src/substitution");

// Each of the following tests satisfies a passing requirement
describe('substitution', () => {
  it("will return false if alphabet length is not 26", () => {
    const actual = substitutionModule.substitution("thinkful", "mnbvcxzlkjhgfdsapoiuytre");
    expect(actual).to.be.false;
  });
  it("correctly decodes given phrase", () => {
    const expected = "thinkful";
    const actual = substitutionModule.substitution("ziofayxs", "qwertyuiopasdfghjklzxcvbnm", false);
    expect(actual).to.equal(expected);
  });
  it("returns false if duplicate characters exist in alphabet", () => {
    actual = substitutionModule.substitution("thinkful", "aabbccddeeffgghhiijjkkmm");
    expect(actual).to.be.false;
  });
  it("spaces are taken into account", () => {
    const expected = "think ful";
    const actual = substitutionModule.substitution("ziofa yxs", "qwertyuiopasdfghjklzxcvbnm", false);
    expect(actual).to.equal(expected);
  });
  it("capital letters will be ignored", () => {
    const expected = "ziofayxs";
    const actual = substitutionModule.substitution("ThInKfUl", "qwertyuiopasdfghjklzxcvbnm");
    expect(actual).to.equal(expected);
  });
})