let add = require("./calc");
let Calculator = require("./calculator");

describe("calculator", () => {
  let calc = null;

  beforeEach(() => {
    const options = {
      precision: 2,
    };

    calc = new Calculator(options);
  });

  it("add two positive numbers", () => {
    const result = calc.add(1.3334, 4.5);
    expect(result).toEqual(5.83);
  });

  it("add two negative numbers", () => {
    const result = calc.add(-1.3334, -4.5);
    expect(result).toEqual(-5.83);
  });

  it("multiply two numbers", () => {
    const result = calc.multiply(2.333, 3.5);
  
    expect(result).toEqual(8.17);
  });
  

});
