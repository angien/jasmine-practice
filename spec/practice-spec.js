var practice = require("../practice");

// like a test suite
describe("test suite", function () {
  // one unit test
  it ("should add 2 and 3", function () {
    var product = practice.add(2,3);
    expect(product).toBe(5);
  })

  it ("should multiply 2 and 3", function () {
    var product = practice.multiply(2,3);
    expect(product).toBe(6);
  })

  it ("should true OR false = true", function () {
    var product = practice.or(true,false);
    expect(product).toBe(true);
  })

  it ("should return nothing", function () {
    var product = practice.nothing();
     expect(product).not.toBeDefined();
  })

})